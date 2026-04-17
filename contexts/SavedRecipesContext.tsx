import React, { createContext, useContext, useMemo, useState } from 'react';

interface SavedRecipesContextValue {
  savedIds: string[];
  isSaved: (recipeId: string) => boolean;
  toggleSaved: (recipeId: string) => void;
}

const SavedRecipesContext = createContext<SavedRecipesContextValue | undefined>(undefined);

export function SavedRecipesProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const value = useMemo<SavedRecipesContextValue>(
    () => ({
      savedIds,
      isSaved: (recipeId: string) => savedIds.includes(recipeId),
      toggleSaved: (recipeId: string) => {
        setSavedIds((prev) =>
          prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]
        );
      },
    }),
    [savedIds]
  );

  return <SavedRecipesContext.Provider value={value}>{children}</SavedRecipesContext.Provider>;
}

export function useSavedRecipes() {
  const context = useContext(SavedRecipesContext);
  if (!context) {
    throw new Error('useSavedRecipes must be used within SavedRecipesProvider');
  }
  return context;
}
