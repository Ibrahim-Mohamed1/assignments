import React from 'react';

import Box from "./Box"

const App = () => {
    const styles = {
      display:"grid",
      gridGap:5,
      gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",
    }
    return (
      <div style={styles}>
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
        <Box
          title="What color am I?" subtitle="idk" information="can you tell me?"
        />
      </div>
    )
}

export default App;
