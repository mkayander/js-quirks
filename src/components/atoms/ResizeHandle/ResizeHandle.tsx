"use client";

import React from "react";
import { PanelResizeHandle } from "react-resizable-panels";
import styles from "./ResizeHandle.module.css";

type ResizeHandleProps = {
  id?: string;
};

export const ResizeHandle: React.FC<ResizeHandleProps> = ({ id }) => {
  return (
    <PanelResizeHandle className={`${styles.ResizeHandleOuter}`} id={id}>
      <div className="ResizeHandleInner group absolute bottom-px left-px right-px top-px flex  rounded bg-indigo-300 bg-opacity-5 transition hover:bg-opacity-30 active:bg-opacity-50">
        <svg
          className={"rotate-90 opacity-0 transition group-hover:opacity-50"}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
          />
        </svg>
      </div>
    </PanelResizeHandle>
  );
};
