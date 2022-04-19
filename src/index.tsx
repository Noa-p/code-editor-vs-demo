import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as monaco from "monaco-editor";
import CodeMirror from "codemirror";
import "codemirror/mode/sql/sql";
import "codemirror/mode/javascript/javascript.js"
import "codemirror/lib/codemirror.css";
import "codemirror/addon/search/search.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/jump-to-line.js";
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "./index.css";

const App = () => {
  const cmRef = useRef(null);
  const monacoRef = useRef(null);

  let mycm: null | CodeMirror.Editor = null;
  let cmdoc: null | CodeMirror.Doc = null;

  useEffect(() => {
    if (cmRef && cmRef.current) {
      // cmdoc = CodeMirror.Doc(
      //   "function myScript(){return 100;}\n",
      //   "javascript"
      // );

      var comp = [
        ["here", "hither"],
        ["asynchronous", "nonsynchronous"],
        ["completion", "achievement", "conclusion", "culmination", "expirations"],
        ["hinting", "advise", "broach", "imply"],
        ["function","action"],
        ["provide", "add", "bring", "give"],
        ["synonyms", "equivalents"],
        ["words", "token"],
        ["each", "every"],
      ]

      const synonyms: CodeMirror.HintFunction = (
        cm: CodeMirror.Editor, 
        option: CodeMirror.ShowHintOptions
      ) => {
        return new Promise<CodeMirror.Hints | null | undefined>((accept) => {
          setTimeout(function () {
            var cursor = cm.getCursor(),
              line = cm.getLine(cursor.line);
            var start = cursor.ch,
              end = cursor.ch;
            console.log("line:", line)
            while (start && /\w/.test(line.charAt(start - 1))) --start;
            while (end < line.length && /\w/.test(line.charAt(end))) ++end;
            var word = line.slice(start, end).toLowerCase();
            console.log("word:", word)
            for (var i = 0; i < comp.length; i++) {
              if (comp[i].indexOf(word) != -1) {
                console.log("comp!")
                return accept({
                  list: comp[i],
                  from: CodeMirror.Pos(cursor.line, start),
                  to: CodeMirror.Pos(cursor.line, end),
                });
              }
            }
            console.log("null!")
            return accept(null);
          }, 100);
        });
      }

      const tabKeyHandler: string | false | ((instance: CodeMirror.Editor) => void | { toString(): "CodeMirror.PASS"; }) = (
        cm: CodeMirror.Editor
      ) => {
        ////key maps handle
        console.log("getoption:",cm.getOption("indentUnit"))
        console.log("tab!")
        var cursor = cm.getCursor(),
            line = cm.getLine(cursor.line);
        var token = cm.getTokenAt(cursor);
        var tokentype = cm.getTokenTypeAt(cursor);
        var linetoken = cm.getLineTokens(cursor.line);
        var modeat = cm.getModeAt(cursor);
        var mode = cm.getMode();
        //var helpers = cm.getHelpers(cursor);
        var state = cm.getStateAfter();
        var stat = cm.state;
        console.log("tab!", cursor, line, line.length, cursor.ch)
        console.log("mode:", modeat, mode)
        console.log("token:", token, linetoken, tokentype)
        console.log("state:", state, stat)
        if (line.length === cursor.ch) {
          cm.showHint();
        }
        return CodeMirror.Pass;
      }

      mycm = CodeMirror(cmRef.current, {
        value: "function myScript(){return 100;}\n",
        mode: {name: "javascript", typescript: true},
        lineNumbers: true,
        tabSize: 2,
        extraKeys: {"Alt-F": "findPersistent"},
        hintOptions: { 
          completeSingle: false,
        },
        ///////////////////////////////
        lineSeparator: null,
        theme: "abbott",
        indentUnit: 2,
        smartIndent: true,
        indentWithTabs: false,
        electricChars: true,
        specialChars:
          /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/,
        direction: "ltr",
        rtlMoveVisually: true,
        keyMap: "default", //
        //configureMouse: (cm:CodeMirror.Editor, repeat:"single" | "double" | "triple", event:Event) => {return {unit, extend, addNew, moveOnDrag}},
        lineWrapping: false,
        firstLineNumber: 1,
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
      });
    }
  }, []);

  useEffect(() => {
    if (mycm) {
      //注册事件handler
      const handler = (e) => {
        console.log("change!", e);
      };
      const compHandler = (cm:CodeMirror.Editor, e) => {
        console.log(e, e.keyCode, e.text[0])
        if (!cm.state.completionActive &&
          /[a-zA-Z0-9]+/.test(e.text[0])) {
            cm.showHint()
            CodeMirror.commands.autocomplete(cm, undefined, {completeSingle: false})
          }
      }
      mycm.on("change", handler);
      mycm.on("inputRead", compHandler);

      return () => {
        mycm && mycm.off("change", handler);
        mycm && mycm.off("inputRead", compHandler);
      };
    }
  }, []);

  useEffect(() => {
    if (monacoRef && monacoRef.current) {
      monaco.editor.create(monacoRef.current, {
        value: 'console.log("Hello, world")',
        language: "javascript",
        acceptSuggestionOnCommitCharacter: true,
        acceptSuggestionOnEnter: "on",
        accessibilityHelpUrl: "https://go.microsoft.com/fwlink/?linkid=852450",
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
        bracketPairColorization: { enabled: false },
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
        wordWrap: "bounded",
      });
    }
  }, []);

  return (
    <div id="container">
      <div className="codemirror-container">
        <h1>CodeMirror</h1>
        <div ref={cmRef} className="editor"></div>
      </div>
      <div className="monaco-container">
        <h1>Monaco Editor</h1>
        <div ref={monacoRef} className="editor"></div>
      </div>
    </div>
  );
};

const domContainer = document.getElementById("root");
ReactDOM.render(<App />, domContainer);
