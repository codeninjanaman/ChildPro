const Sidebar = ({ sections, currentStep, goToStep }: { sections: string[], currentStep: number, goToStep: (index: number) => void }) => (
    <div style={{ background: '#0f0f0f', color: '#fff', padding: '1rem', height: '100vh' }}>
      <div style={{ fontSize: '1.2rem', marginBottom: '2rem', cursor:'pointer' }}><strong>ChildCarePro</strong></div>
      {sections.map((section, index) => (
        <div
          key={index}
          onClick={() => goToStep(index)}
          style={{
            padding: '0.5rem 0',
            color: currentStep === index ? '#00ff88' : '#fff',
            cursor: 'pointer'
          }}>
          {section}
        </div>
      ))}
    </div>
  );

  export default Sidebar;