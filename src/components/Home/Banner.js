import React from "react";
import FillButton from "../Global/Buttons/FillButton";
import Image from "next/image";
import InteractiveSection from "../Global/InteractiveSection";

const Banner = ({
    heading = "BlissFul Blueberry",
    subheading = "",
    text = "Soda that’s always a surprise",
    button,
    desktopImage,
    mobileImage,
    url
}) => {
    return (
        <InteractiveSection targetUrl={url}>
            <section className="relative bg-cover bg-center sm:aspect-[16/8] overflow-hidden">
                <picture>
                    <source srcSet={desktopImage} media="(min-width: 768px)" />
                    <Image
                        src={mobileImage}
                        alt={heading}
                        width={1920}
                        height={1080}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto"
                        priority
                    />
                </picture>

                <div className="absolute inset-0 flex items-end lg:items-center px-8 lg:p-32 lg:w-1/2">
                    <div className="max-w-lg flex flex-col">
                        <h1 className="text-purple text-4xl font-bold sm:text-8xl">{heading}</h1>

                        {subheading && (
                            <p className="mt-2 text-base sm:text-xl text-purple">
                                {subheading}
                            </p>
                        )}

                        <p className="mt-4 text-lg text-purple">{text}</p>

                        {button && (
                            <FillButton
                                text={button}
                                color="bg-white"
                                text_color="text-purple"
                                url={url}
                            />
                        )}
                    </div>
                </div>
            </section>
        </InteractiveSection>
    );
};

export default Banner;
