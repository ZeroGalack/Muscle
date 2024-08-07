import React, { useState, useEffect } from 'react';

const MolaAni = ({ toValueProp, Massa }) => {

    const toValue = 1 
    useEffect(() => {

    }, [toValue, toValueProp]);

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" width="100px" height="240px" viewBox="0 0 70.291 126.831">
                <g id="Circle.004">
                    <path style={{ fill: 'none', stroke: 'white' }} d="m27.482,34.119l-3.409,-8.078l-2.478,-8.496l-1.219,-6.600l-0.484,-5.533l-0.010,-5.400l-2.409,-0.011l-0.022,5.547l-0.498,5.393l-1.225,6.327l-2.583,8.451l-3.467,7.954l1.448,0.674l1.235,-2.035l0.823,1.939l1.286,-0.906l0.769,0.915l0.679,-1.202l0.634,1.559l1.246,-2.466l0.599,2.240l1.128,0.431l0.604,-1.425l0.646,0.878l0.000,-0.000l1.050,-1.414l0.992,0.679l0.543,-0.756l0.943,0.952l0.745,1.321l0.458,-1.398l1.190,0.919l0.788,-0.457l4.567,9.189l3.968,10.392l1.466,14.930l-1.762,12.992l-4.387,12.997l-6.697,11.760l-2.429,6.914l-0.888,8.446l0.631,6.069l0.769,6.069l-3.951,-1.482l-3.828,1.446l0.699,-6.046l0.561,-6.046l-0.749,-8.253l0.663,0.368l0.399,-0.964l0.716,0.713l0.475,-0.644l0.360,0.881l0.478,0.405l0.370,-0.840l0.597,-0.934l0.049,0.743l0.221,1.243l0.530,-1.120l0.675,-0.796l0.422,1.268l0.800,-0.526m-12.530,-79.622l-4.435,9.116l-3.831,10.342l-1.410,14.936l1.811,12.986l4.436,12.981l6.744,12.976l2.459,6.487"/>

                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="scale"
                        values="1 1; 1 0.6; 1 0.6"  // Escala horizontal permanece em 1, escala vertical vai de 1 a 0.5 e volta para 1
                        keyTimes="0; 0.5; 1"  // Define quando cada estado é atingido (0%, 50%, 100% do tempo)
                        begin="0s"
                        dur="2s"  // Tempo total para incluir a ida e volta
                        repeatCount="indefinite"
                        additive="sum"
                    />
                </g>
            </svg>
        </div>
    );
};

export default MolaAni;
