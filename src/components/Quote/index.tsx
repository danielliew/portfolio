import React, { useEffect, useState } from "react";
import styles from "./Qoute.module.css";

const qoutes = [
  { text: "Problem solving is a lifestyle." },
  { text: "I like problem solving." },
  { text: "I solve problems." },
  { text: "👨‍🎓", emoji: 5 },
];

const delay = 100;

const bufferCoefficient = 25;

const Qoute: React.FC = () => {
  const [qoute, setQoute] = useState({
    qoute: "",
    index: 0,
    expanding: true,
    buffer: 0,
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      setQoute(({ qoute, index, expanding, buffer }) => {
        if (qoute.length === qoutes[index].text.length) {
          if (buffer === bufferCoefficient) {
            expanding = !expanding;
            buffer = 0;
          } else
            return {
              qoute,
              index,
              expanding,
              buffer: buffer + 1,
            };
        }

        if (qoute.length === 0 && !expanding) {
          if (index === qoutes.length - 1) index = 0;
          else index++;
          expanding = !expanding;
        }

        return {
          qoute: qoutes[index].text.slice(
            0,
            (expanding
              ? qoute.length / (qoutes[index].emoji || 1) + 1
              : qoute.length / (qoutes[index].emoji || 1) - 1) *
              (qoutes[index].emoji || 1)
          ),
          index,
          expanding,
          buffer,
        };
      });
    }, delay);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div>
      <div>
        <p className={styles.blinkingCursor}>{qoute.qoute}</p>
      </div>
    </div>
  );
};

export default Qoute;
