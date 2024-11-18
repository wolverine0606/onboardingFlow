import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface OnboardingContextData {
  isOnboardingCompleted: boolean;
  setIsOnboardingCompleted: Dispatch<SetStateAction<boolean>>;
}

interface OnboardingProviderProps {
  children: ReactNode;
}

const OnboardingContext = createContext<OnboardingContextData | null>(null);

export default function OnboardingProvider({
  children,
}: OnboardingProviderProps) {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  return (
    <OnboardingContext.Provider
      value={{
        isOnboardingCompleted,
        setIsOnboardingCompleted,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = (): OnboardingContextData =>
  useContext(OnboardingContext)!;
