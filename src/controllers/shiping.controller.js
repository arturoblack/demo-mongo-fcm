const SaleModel = require('../models/sale.model');
const axios = require('axios').default;

exports.nextStep = async function(req, res) {
    const {
        saleId,
        sellerId,
        state
    } = req.body;

    const sale = await SaleModel.findById(saleId);
    const oldState = sale.state;
    sale.state = state;
    tracing = sale.tracing || [];
    const data = {
        datetime: new Date(),
        sellerId,
        oldState,
        newState: state,
    };
    tracing.push({saleId, ...data});
    sale.tracing = tracing;
    
    sale.save();
    
    sendEvent(sale);

    res.json({ok: 'ok'});
};

async function sendEvent(ext) {

      const key = 'AAAA1OvkOKc:APA91bGle6mtjQVStBncyRCs4Ub8qygs0_iNawgY4vl_6W1M13qqDf-8WHCu5k3ypolNvUOLdgK4jaCKB6sbEoML2pfyy8eAr2lH_su5Tc1QxlavwPXR2v0V_mOCIBcsSmmbRpshbmKk';
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `key=${key}`
      }
      const data = {
        "to": "/topics/ic-students",
        "notification": {
            "title": `Paquete #${ext.saleId} enviado con exito`,
            "body": "el paquete esta ahora en el estado " + ext.newState,
            "mutable_content": true,
            "sound": "Tri-tone"
        }
    };
      axios.post('https://fcm.googleapis.com/fcm/send', data, {headers})
      .then(function (response) {
        console.log('evento enviado');
      })
      .catch(function (error) {
        console.log(error);
      });

}