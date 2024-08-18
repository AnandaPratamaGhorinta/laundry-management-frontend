import React, { createContext, useState, useContext, ReactNode } from "react";

interface SubtitleContextType {
  subtitle: string;
  setSubtitle: React.Dispatch<React.SetStateAction<string>>;
}

const SubtitleContext = createContext<SubtitleContextType | undefined>(
  undefined
);

export const useSubtitle = () => {
  const context = useContext(SubtitleContext);
  if (!context) {
    throw new Error("useSubtitle must be used within a SubtitleProvider");
  }
  return context;
};

interface SubtitleProviderProps {
  children: ReactNode;
}

export const SubtitleProvider: React.FC<SubtitleProviderProps> = ({
  children,
}) => {
  const [subtitle, setSubtitle] = useState<string>("");

  return (
    <SubtitleContext.Provider value={{ subtitle, setSubtitle }}>
      {children}
    </SubtitleContext.Provider>
  );
};
