import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as LinkNav } from 'react-router-dom'

interface EditableComponentProps {
  initialImageSrc: string;
  initialHeaderText: string;
  initialParagraphText: string;
}

const EditableComponent: React.FC<EditableComponentProps> = ({
  initialImageSrc,
  initialHeaderText,
  initialParagraphText,
}) => {
  const [imageSrc, setImageSrc] = useState(initialImageSrc);
  const [headerText, setHeaderText] = useState(initialHeaderText);
  const [paragraphText, setParagraphText] = useState(initialParagraphText);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result as string;
        setImageSrc(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="flex flex-col-reverse sm:flex-row sm:justify-evenly my-2"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <img
              src={imageSrc}
              className="mx-auto my-4 sm:m-0 w-150 h-150 sm:w-110 sm:h-110"
              alt="Imagem de laudo e instalações elétricas"
            />
          </label>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mx-auto text-white w-3/4 sm:w-3/4 rounded-xl"
        >
          <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">
            <input
              type="text"
              value={headerText}
              onChange={(e) => setHeaderText(e.target.value)}
              className="bg-transparent border-b-2 border-[#FAD40F] outline-none"
            />
          </h3>
          <p className="text-black font-light text-xl my-4">
            <textarea
              value={initialParagraphText}
              onChange={(e) => setParagraphText(e.target.value)}
              className="bg-transparent border-b-2 border-black outline-none resize-none"
            />
          </p>

          <button className="self-start mx-4 hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
            <LinkNav to="/contact">
              <p></p>
            </LinkNav>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default EditableComponent;
