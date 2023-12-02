import { StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Modal({ handleCloseModal, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCloseModal?.();
      }
    };
    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <View style={styles.modal_container} ref={ref}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  modal_container: {},
});
