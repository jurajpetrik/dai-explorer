import React from 'react';
import web3 from  '../web3';
import { formatNumber } from '../helpers';

const SystemStatus = (props) => {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">SAI Status</h3>
      </div>
      <div className="box-body">
        <div className="row">
          <div className="col-md-12 system-status">
            <div>
              <strong>Status</strong>
              <span className={ props.sai.tub.off ? 'error-color' : 'success-color' }>{ typeof props.sai.tub.off !== 'undefined' ? (props.sai.tub.off ? 'Off' : 'On') : 'Loading...' }</span>
            </div>
            <div>
              <strong>ETH/SKR</strong>
              <span title={ formatNumber(props.sai.tub.per) }>{ formatNumber(props.sai.tub.per, 3) }</span>
            </div>
            <div>
              <strong>USD/ETH</strong>
              <span title={ formatNumber(props.sai.tub.tag) }>{ formatNumber(props.sai.tub.tag, 3) }</span>
            </div>
            <div>
              <strong>Liq. Ratio</strong>
              <span title={ formatNumber(props.sai.tub.mat.times(100)) }>{ formatNumber(props.sai.tub.mat.times(100), 3) }%</span>
            </div>
            <div>
              <strong>Liq. Penalty</strong>
              <span title={ formatNumber(props.sai.tub.axe.times(100).minus(web3.toWei(100))) }>{ formatNumber(props.sai.tub.axe.times(100).minus(web3.toWei(100)), 3) }%</span>
            </div>
            <div>
              <strong>Debt Ceiling</strong>
              <span title={ formatNumber(props.sai.tub.hat) }>{ formatNumber(props.sai.tub.hat, 3) }</span>
            </div>
            <div>
              <strong>Deficit</strong>
              <span>{ props.sai.tub.off === false ? (props.sai.tub.eek ? 'YES' : 'NO') : '-' }</span>
            </div>
            <div>
              <strong>Safe</strong>
              <span>{ props.sai.tub.off === false ? (props.sai.tub.safe ? 'YES' : 'NO') : '-' }</span>
            </div>
            <div>
              <strong>Avail. Boom</strong>
              <span>
                {
                  props.sai.tub.off === false
                  ? <span>
                      Sell <span title={ formatNumber(props.sai.tub.avail_boom_skr) }>{ formatNumber(props.sai.tub.avail_boom_skr, 3) }</span> SKR<br />
                      Buy <span title={ formatNumber(props.sai.tub.avail_boom_sai) }>{ formatNumber(props.sai.tub.avail_boom_sai, 3) }</span> SAI
                    </span>
                  : '-'
                }
              </span>
            </div>
            <div>
              <strong>Avail. Bust</strong>
              <span>
                {
                  props.sai.tub.off === false
                  ? <span>
                      Sell <span title={ formatNumber(props.sai.tub.avail_bust_sai) }>{ formatNumber(props.sai.tub.avail_bust_sai, 3) }</span> SAI<br />
                      Buy <span title={ formatNumber(props.sai.tub.avail_bust_skr) }>{ formatNumber(props.sai.tub.avail_bust_skr, 3) }</span> SKR
                    </span>
                  : '-'
                }
              </span>
            </div>
            <div>
              <strong>Fix</strong>
              <span title={ formatNumber(props.sai.tub.fix) }>{ props.sai.tub.off ? formatNumber(props.sai.tub.fix, 3) : '-' }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemStatus;
