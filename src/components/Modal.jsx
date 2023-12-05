import { StyleSheet, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

export default function Modal({ children }) {

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       handleCloseModal?.();
  //     }
  //   };
  //   window.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, []);

  return (
    <View style={styles.modal_container} >
      {children}
    </View>
  );
}
const WindowsHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  modal_container: {
    height: WindowsHeight,
    backgroundColor: "#3e3d3dcf",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
  },
});
