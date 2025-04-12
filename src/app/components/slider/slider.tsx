import styles from "./slider.module.css";

export const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>{children}</div>
      </div>
    </>
  );
};
