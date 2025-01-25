import { createPortal } from "react-dom";

import "./Modal.css";

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  // With the help of "React Portals", I was able to render my JSX in
  // any desired location within the DOM, even outside the root element.
  // Regardless of where it exists in the component tree, this allows me
  // to easily move or display the JSX anywhere in the DOM structure.

  // Ported in body instead of root (using React Portals)
  return createPortal(
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
