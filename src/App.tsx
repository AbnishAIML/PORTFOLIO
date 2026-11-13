import React, { useState, useEffect } from 'react';
import { SkipLink } from './components/SkipLink';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { FeaturedProjectSection } from './sections/FeaturedProjectSection';
import { CurrentlyBuildingSection } from './sections/CurrentlyBuildingSection';
import { GitHubActivitySection } from './sections/GitHubActivitySection';
import { MilestonesSection } from './sections/MilestonesSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';

export const App: React.FC = () => {
  const [cursorEnabled, setCursorEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('abnish_portfolio_cursor_enabled');
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    try {
      localStorage.setItem('abnish_portfolio_cursor_enabled', String(cursorEnabled));
    } catch {
      // Ignore storage errors
    }
  }, [cursorEnabled]);

  const handleToggleCursor = () => setCursorEnabled((prev) => !prev);

  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text selection:bg-accent-500/20 selection:text-accent-400 font-sans transition-colors duration-300">
      <SkipLink />
      <BackgroundCanvas />
      <CustomCursor enabled={cursorEnabled} />
      <Navbar cursorEnabled={cursorEnabled} onToggleCursor={handleToggleCursor} />

      <main id="main-content" className="relative z-10 focus:outline-none">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectSection />
        <CurrentlyBuildingSection />
        <GitHubActivitySection />
        <MilestonesSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default App;

