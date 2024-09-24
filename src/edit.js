/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();

  const updateText = (e) => {
    setAttributes({ text: e.target.value });
  };

  const updateClass = (e) => {
    setAttributes({ classes: "alert-container " + e.target.value });
    setAttributes({ class: e.target.value });
  };

  return (
    <div {...blockProps}>
      <div className={attributes.classes}>
        <div className="input-container">
          <label htmlFor="alert-text">{__("Alert text", "alert")}</label>
          <input
            type="text"
            name="alert-text"
            placeholder="Enter alert text here"
            onChange={updateText}
            autoComplete="off"
            defaultValue={attributes.text}
          />
        </div>
        <div className="input-container">
          <label htmlFor="alert-text">{__("Alert type", "alert")}</label>
          <select
            name="alert-type"
            id="alert-type"
            onChange={updateClass}
            defaultValue={attributes.class}
          >
            <option value="alert-default">Default</option>
            <option value="alert-info">Info</option>
            <option value="alert-success">Success</option>
            <option value="alert-danger">Danger</option>
            <option value="alert-warning">Warning</option>
          </select>
        </div>
      </div>
    </div>
  );
}
