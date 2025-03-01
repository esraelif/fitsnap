import React from "react";

const features = [
  {
    title: "Simple and Tasty Recipes",
    image:
      "https://media.istockphoto.com/id/1829241109/de/foto/gemeinsam-einen-brunch-genie%C3%9Fen.jpg?s=612x612&w=0&k=20&c=Jl1D38s_AudPzLlRl6_5IjTv9zE4-R_SKHfyduZD9VQ=",
  },
  {
    title: "Track Your Progress Effortlessly",
    image:
      "https://media.istockphoto.com/id/2170288955/de/foto/frohes-neues-jahr-2025-2025-symbolisiert-den-beginn-des-neuen-jahres-nahaufnahme-der-f%C3%BC%C3%9Fe.jpg?s=612x612&w=0&k=20&c=wYQRdnFPTk8N4Bw2ABWBkR_EmAXv-gu3s3Q3xCWfmV4=",
  },
  {
    title: "Tailored for Your Goals",
    image:
      "https://media.istockphoto.com/id/1253099922/de/foto/sortiment-an-frischem-obst-und-gem%C3%BCses%C3%A4ften-in-regenbogenfarben.jpg?s=612x612&w=0&k=20&c=r8zYClIXuvm_r10aDzN3afUIon7UkiOrG7qi6jk-Kjc=",
  },
  {
    title: "Balanced Eating",
    image:
      "https://media.istockphoto.com/id/1457433817/de/foto/gruppe-gesunder-lebensmittel-f%C3%BCr-die-flexitarische-ern%C3%A4hrung.jpg?s=612x612&w=0&k=20&c=JJgMR6bYIdshjZVTwT73bLpvLp1zYurxn_7wTXpi82c=",
  },
  {
    title: "Weight Loss",
    image:
      "https://media.istockphoto.com/id/1498835905/de/foto/ern%C3%A4hrungsberaterin-misst-taille-eines-%C3%BCbergewichtigen-mannes-in-einer-klinik-zur.jpg?s=612x612&w=0&k=20&c=c-jb1s9r7jfu1L6upJK-oh2N-CbpfqwxOZPFwbSt5is=",
  },
];

export default function Features() {
  return (
    <>
      <h1 className="flex justify-center mt-6 text-3xl font-bold text-pink-600">
        Your Personalized Path to Wellness!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-cover bg-center p-6 rounded-lg text-center transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${feature.image})` }}
          >
            <h2 className="font-bold text-xl bg-gray-900 bg-opacity-50 p-2 rounded">
              {feature.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}
