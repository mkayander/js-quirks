"use client";

import { ResizeHandle } from "@/components/atoms/ResizeHandle/ResizeHandle";
import React from "react";
import { Panel, PanelGroup } from "react-resizable-panels";
import styles from "./SplitPanelsLayout.module.css";

type SplitPanelsLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const SplitPanelsLayout: React.FC<SplitPanelsLayoutProps> = ({
  left,
  right,
}) => {
  return (
    <PanelGroup
      autoSaveId="main-vertical-left"
      direction="horizontal"
      className={`${styles["panelGroup"]} grow`}
    >
      <Panel defaultSize={30} order={1}>
        {left}
      </Panel>
      <ResizeHandle />
      <Panel className={styles["secondPanel"]} order={2}>
        {right}
      </Panel>
    </PanelGroup>
  );
};
