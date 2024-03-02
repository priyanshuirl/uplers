import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  getDefaultReactSlashMenuItems,
  ReactSlashMenuItem,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/react/style.css";
import { CiCircleList } from "react-icons/ci";
import { FaCode } from "react-icons/fa";

const insertAgeQuestion = (editor: BlockNoteEditor) => {
  const currentBlock = editor.getTextCursorPosition().block;

  const ageQuestionBlock = {
    type: "paragraph" as const,
    content: [
      { type: "text", text: "What is your age?", styles: { bold: true } },
    ],
  } as const;
  const ageOptionsBlock18 = {
    type: "bulletListItem" as const,
    content: [{ type: "text", text: "18", styles: {} }],
  } as const;
  const ageOptionsBlock19 = {
    type: "bulletListItem" as const,
    content: [{ type: "text", text: "19", styles: {} }],
  } as const;
  const ageOptionsBlock20 = {
    type: "bulletListItem" as const,
    content: [{ type: "text", text: "20", styles: {} }],
  } as const;
  const ageOptionsBlock21 = {
    type: "bulletListItem" as const,
    content: [{ type: "text", text: "21", styles: {} }],
  } as const;
  const ageOptionsBlock22 = {
    type: "bulletListItem" as const,
    content: [{ type: "text", text: "22", styles: {} }],
  } as const;

  editor.insertBlocks(
    [
      //@ts-ignore
      ageQuestionBlock,
      //@ts-ignore
      ageOptionsBlock18,
      //@ts-ignore
      ageOptionsBlock19,
      //@ts-ignore
      ageOptionsBlock20,
      //@ts-ignore
      ageOptionsBlock21,
      //@ts-ignore
      ageOptionsBlock22,
    ],
    currentBlock,
    "after"
  );
};

const insertCodeBlock = (editor: BlockNoteEditor) => {
  const currentBlock = editor.getTextCursorPosition().block;

  const codeBlock = {
    type: "paragraph" as const,
    content: [{ type: "text", text: "Type Code Here", styles: {} }],
  } as const;
  editor.insertBlocks(
    [
      //@ts-ignore
      codeBlock,
    ],
    currentBlock,
    "after"
  );
};

const insertAgeQuestionItem: ReactSlashMenuItem = {
  name: "Add Age Question",
  execute: insertAgeQuestion,
  aliases: ["age"],
  group: "",
  icon: <CiCircleList size={18} />,
  hint: "Used to insert a block with Age Question below.",
};

const insertCodeBlockItem: ReactSlashMenuItem = {
  name: "Add code block",
  execute: insertCodeBlock,
  aliases: ["code"],
  group: "",
  icon: <FaCode size={18} />,
  hint: "Used to insert a block with some code below.",
};

const menuItemsWhiteList = ["Table"];
const newSlashMenuItems = getDefaultReactSlashMenuItems().filter(({ name }) =>
  menuItemsWhiteList.includes(name)
);

const customSlashMenuItemList = [
  ...newSlashMenuItems,
  insertAgeQuestionItem,
  insertCodeBlockItem,
];

const TextEditor = () => {
  const editor: BlockNoteEditor = useBlockNote({
    slashMenuItems: customSlashMenuItemList,
  });

  return (
    <div className="editor-container">
      <BlockNoteView editor={editor} theme={"light"} />
    </div>
  );
};

export default TextEditor;
