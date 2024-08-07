import React, { useState, useEffect } from 'react';

const MolaAni = ({ toValueProp, Massa }) => {
    if (toValueProp >= 4) {
        toValueProp = 4;
    }
    const toValue = '1 ' + toValueProp;

    const massa = Massa + ' g';
    const [toValueQuad, setToValueQuad] = useState("1 1");

    useEffect(() => {
        function velQuad(x) {
            const x1 = 2;
            const y1 = 27;
            const x2 = 3;
            const y2 = 57;

            if (x === 1) {
                return 1;
            } else {
                return y1 + ((y2 - y1) / (x2 - x1)) * (x - x1);
            }
        }

        const secondValue = parseFloat(toValue.split(" ")[1]);
        const VelQuad = velQuad(secondValue);
        console.log(VelQuad);
        setToValueQuad(`1 ${VelQuad}`);
    }, [toValue, toValueProp]);

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" width="100px" height="240px" viewBox="0 0 70.291 126.831">
                <g id="Circle.004">
                    <path style={{ fill: 'none', stroke: 'white' }} d="m35.146,-0.000l0.000,-0.000m0.000,-0.000l35.146,2.040l-70.291,4.081l70.291,4.082l-70.291,4.081l70.291,4.080l-70.291,4.081l70.291,4.082l-35.167,1.996"/>
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="scale"
                        values={`1 4; ${toValue};`}  // Vai de 1 1 para toValue e depois volta para 1 1
                        keyTimes="0; 1"  // Define quando cada estado é atingido (0%, 50%, 100% do tempo)
                        begin="0s"
                        dur="2s"  // O dobro do tempo para incluir a ida e volta
                        repeatCount="indefinite"
                        additive="sum"
                    />
                </g>
                <g>
                    <rect x="23.5" y="29" width="25" height="25" style={{ fill: 'white', stroke: 'black' }}>
                        <animateTransform attributeName="transform"
                            type="translate"
                            values={`1 87; ${toValueQuad};`}  // Vai de 0 0 para toValueQuad e depois volta para 0 0
                            keyTimes="0; 1"
                            begin="0s"
                            dur="2s"
                            repeatCount="indefinite"
                            additive="sum"
                        />
                    </rect>
                    <text x="36" y="42" textAnchor="middle" alignmentBaseline="middle" style={{ fill: 'black', fontSize: '9px' }}>
                        <animateTransform attributeName="transform"
                            type="translate"
                            values={`1 87; ${toValueQuad};`}
                            keyTimes="0; 1"
                            begin="0s"
                            dur="2s"
                            repeatCount="indefinite"
                            additive="sum"
                        />
                        {massa}
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default MolaAni;
