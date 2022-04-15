import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as monaco from 'monaco-editor';
import CodeMirror from 'codemirror';
import "codemirror/mode/sql/sql";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/search/search.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/jump-to-line.js";
import "codemirror/addon/scroll/annotatescrollbar.js";
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
import "./index.css";


const App = () => {
    const cmRef = useRef(null)
    const monacoRef = useRef(null)
    const monacoDiffRef = useRef(null)

    let mycm: null | CodeMirror.Editor = null
    let cmdoc: null | CodeMirror.Doc = null

    useEffect(() => {
        if (cmRef && cmRef.current) {

            cmdoc = CodeMirror.Doc(
                "function myScript(){return 100;}\n",
                "javascript"
            )

            mycm = CodeMirror(cmRef.current, {
                value: cmdoc,
                mode:  "javascript",
                lineSeparator: null,
                theme: "abbott",
                indentUnit: 2,
                smartIndent: true,
                tabSize: 4,
                indentWithTabs: false,
                electricChars: true,
                specialChars: /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/,
                direction: "ltr",
                rtlMoveVisually: true,
                keyMap: "default", //
                //configureMouse: (cm:CodeMirror.Editor, repeat:"single" | "double" | "triple", event:Event) => {return {unit, extend, addNew, moveOnDrag}},
                extraKeys: {"Alt-F": "findPersistent"},
                lineWrapping: false,
                lineNumbers: true,
                firstLineNumber: 1,
                lineNumberFormatter: (line: Number) => "#"+line,
                //gutters: ,
                fixedGutter: true,
                scrollbarStyle: "native",
                coverGutterNextToScrollbar: false,
                inputStyle: "textarea",
                readOnly: false,
                screenReaderLabel: "cm_editor",
                showCursorWhenSelecting: false,
                lineWiseCopyCut: true,
                pasteLinesPerSelection: false,
                selectionsMayTouch: true,
                undoDepth: 200,
                historyEventDelay: 1250,
                //tabindex: 1,
                //autofocus: true,
                //phrases: 
            })
        }
    }, [])

    useEffect(() => {
        if (mycm) {
            //注册事件handler
            const handler = (e) => {
                console.log("change!",e)
            }
            mycm.on("change", handler)

            return () => {
                mycm && mycm.off("change", handler)
            }
        }
    }, [])

    useEffect(() => {
        if (monacoRef && monacoRef.current) {
            monaco.editor.create(monacoRef.current, {
                value: 'console.log("Hello, world")',
                language: 'javascript',
                acceptSuggestionOnCommitCharacter: true,
                acceptSuggestionOnEnter: "on",
                accessibilityHelpUrl:  "https://go.microsoft.com/fwlink/?linkid=852450",
                //accessibilityPageSize: 15,
                accessibilitySupport: "auto",
                ariaContainerElement: document.body,
                autoClosingBrackets: "languageDefined",
                autoClosingDelete: "auto",
                autoClosingOvertype: "auto",
                autoClosingQuotes: "languageDefined",
                autoDetectHighContrast: true,
                autoIndent: "advanced",
                autoSurround: "languageDefined",
                automaticLayout: false,
                bracketPairColorization: {enabled: false},
                dragAndDrop: true,
                folding: true,
                fontSize: 14,
                formatOnPaste: false,
                //gotoLocation: {},
                //guides: {},
                //hover: {},
                readOnly: false,
                //scrollbar: {},
                selectOnLineNumbers: true,
                theme: "vs-dark",
                wordWrap: "bounded"
            });
        }
    }, [])

    useEffect(() => {
        if (monacoDiffRef && monacoDiffRef.current) {
            const originalModel = monaco.editor.createModel(
                `(function (global, undefined) {
                "use strict";
                undefinedVariable = {};
                undefinedVariable.prop = 5;
                
                function initializeProperties(target, members) {
                    var keys = Object.keys(members);
                    var properties;
                    var i, len;
                    for (i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    var enumerable = key.charCodeAt(0) !== /*_*/95;
                    var member = members[key];
                    if (member && typeof member === 'object') {
                        if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
                        if (member.enumerable === undefined) {
                            member.enumerable = enumerable;
                        }
                        properties = properties || {};
                        properties[key] = member;
                        continue;
                        } 
                    }
                    // These next lines will be deleted
                    if (!enumerable) {
                        properties = properties || {};
                        properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }
                        continue;
                    }
                    target[key] = member;
                    }
                    if (properties) {
                    Object.defineProperties(target, properties);
                    }
                }
                })(this);`,
                "text/javascript"
            );
            var modifiedModel = monaco.editor.createModel(
                `(function (global, undefined) {
                "use strict";
                var definedVariable = {};
                definedVariable.prop = 5;
                
                function initializeProperties(target, members) {
                    var keys = Object.keys(members);
                    var properties;
                    var i, len;
                    for (i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    var enumerable = key.charCodeAt(0) !== /*_*/95;
                    var member = members[key];
                    if (member && typeof member === 'object') {
                        if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
                        if (member.enumerable === undefined) {
                            member.enumerable = enumerable;
                        }
                        properties = properties || {};
                        properties[key] = member;
                        continue;
                        } 
                    }
                    target[key] = member;
                    }
                    if (properties) {
                    Object.defineProperties(target, properties);
                    }
                }
                })(this);`,
                "text/javascript"
            );
            const diffEditor = monaco.editor.createDiffEditor(monacoDiffRef.current,{
                enableSplitViewResizing: false
            });

            diffEditor.setModel({
                original: originalModel,
                modified: modifiedModel
            });
        }
    }, [])

    return (
        <div id="container">
            <div className='codemirror-container'>
                <h1>CodeMirror</h1>
                <div ref={cmRef} className="editor"></div>
            </div>
            <div className='monaco-container'>
                <h1>Monaco Editor</h1>
                <div ref={monacoRef} className="editor"></div>
            </div>
            <div className='monaco-diff-container'>
                <h1>Monaco Diff Editor</h1>
                <div ref={monacoDiffRef} className="editor"></div>
            </div>
        </div>
    )
}


const domContainer = document.getElementById('root');
ReactDOM.render(<App/>, domContainer);