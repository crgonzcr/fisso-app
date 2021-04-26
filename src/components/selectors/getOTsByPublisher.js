import React from 'react'
import dataOTs from '../data/dataOTs'


export const getOTsByPublisher = ( publisher ) => {
    
    const validPublisher = ['statuses', 'ots'];

    if ( !validPublisher.includes( publisher ) ) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return dataOTs.filter
}
