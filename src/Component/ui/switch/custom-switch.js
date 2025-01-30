// import React from "react";
// import { useDispatch } from "react-redux";
// import { Switch } from "rizzui";
// import { setDeviceProfileTimestamp } from "../../../Store/Action/device-master/device-profile/device-profile-action";

// export default function CustomSwitch({
//   reduxState,
//   name,
//   label,
//   value,
//   disabled,
//   setAction,
//   position,
//   parent,
// }) {
//   const dispatch = useDispatch();

//   const tvalue = parent ? parent["status"] : value;

//   const onClick = (newValue) => {
//     if (disabled !== true) {
//       if (parent) {
//         parent["status"] = newValue; // Update parent's key directly
//         dispatch(setDeviceProfileTimestamp());
//       } else {
//         const updatedState = { ...reduxState, [name]: newValue }; // Update reduxState safely
//         dispatch(setAction(updatedState)); // Dispatch updated state
//       }
//       console.log("parent", parent);
//     }
//   };

//   return (
//     <div>
//       {position === "top" && (
//         <label className="block font-bold ">{label}</label>
//       )}
//       <Switch
//         label={position !== "top" && label}
//         checked={tvalue === true} // Ensure `tvalue` is a boolean
//         onClick={() => onClick(!tvalue)} // Toggle the value on click
//         variant="outline"
//       />
//       {disabled ? (
//         <span className="text-red-500 text-xs tracking-wide">
//           This field cannot be edited
//         </span>
//       ) : null}
//     </div>
//   );
// }
