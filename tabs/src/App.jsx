import { useState } from 'react'
import TabDisplay from './components/TabDisplay'

function App() {
  const tabs = [
    {content: "This is tab1", label: "Tab1"},
    {content: "This is tab2", label: "Tab2"},
    {content: "This is tab3", label: "Tab3"}
  ]

  const [selected, setSelected] = useState(0)
  console.log(selected)

  return (
    <>      
      {
        tabs.map( (tab, index) => 
          <TabDisplay key={index} tabs={tabs} index={index} setSelected={setSelected} selected={selected} label={tab.label} />
        )
      }

        <div style={{height: "300px", width: "600px", backgroundColor: "white"}}>
            <p style={{color: "black"}}>{tabs[selected].content}</p>
        </div>
    </>
  );
};

export default App
