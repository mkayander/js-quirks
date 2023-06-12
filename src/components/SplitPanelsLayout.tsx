"use client";

import { ResizeHandle } from "@/components/ResizeHandle/ResizeHandle";
import React from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

type SplitPanelsLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const SplitPanelsLayout: React.FC<SplitPanelsLayoutProps> = ({
  left,
  right,
}) => {
  return (
    <PanelGroup autoSaveId="main-vertical-left" direction="horizontal">
      <Panel defaultSize={30} order={1}>
        {left}
      </Panel>
      <ResizeHandle />
      <Panel order={2}>{right}</Panel>
    </PanelGroup>
  );
};
