import React from "react";

interface IndicatorProps {
  side: string;
}

function Indicator({ side }: IndicatorProps) {
  return (
    <div style={styles.container(side)}>
      <div style={styles.circle}></div>
    </div>
  );
}

const styles = {
  container: (side: string) => ({
    display: "flex",
    justifyContent: side,
  }),
  circle: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: "50%",
  },
};

export default Indicator;
