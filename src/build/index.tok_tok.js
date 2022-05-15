// Automatically generated with Reach 0.1.10 (c0bba7d2)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c0bba7d2)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    computeMint_: ((_v14030, _v14031, _v14032 ) => {
        const v14030 = stdlib.protect(ctc1, _v14030, null);
        const v14031 = stdlib.protect(ctc1, _v14031, null);
        const v14032 = stdlib.protect(ctc1, _v14032, null);
      
      const v14033 = v14030.A;
      const v14034 = v14030.B;
      const v14035 = v14031.A;
      const v14036 = v14031.B;
      const v14038 = v14032.B;
      let v14039;
      const v14046 = stdlib.eq(v14038, stdlib.checkedBigNumberify('284:19:decimal', stdlib.UInt_max, '0'));
      if (v14046) {
        const v14047 = stdlib.cast(false, true, v14033);
        const v14048 = stdlib.cast(false, true, v14034);
        const v14049 = stdlib.mul256(v14047, v14048);
        const v14050 = stdlib.sqrt256(v14049);
        const v14051 = stdlib.cast(true, false, v14050);
        v14039 = v14051;
        }
      else {
        const v14060 = stdlib.muldiv(v14033, v14038, v14035);
        const v14067 = stdlib.muldiv(v14034, v14038, v14036);
        const v14069 = stdlib.lt(v14060, v14067);
        const v14070 = v14069 ? v14060 : v14067;
        v14039 = v14070;
        }
      
      return v14039;}),
    computeSwap_: ((_v14071, _v14072, _v14073, _v14074 ) => {
        const v14071 = stdlib.protect(ctc2, _v14071, null);
        const v14072 = stdlib.protect(ctc1, _v14072, null);
        const v14073 = stdlib.protect(ctc1, _v14073, null);
        const v14074 = stdlib.protect(ctc4, _v14074, null);
      
      const v14075 = v14072.A;
      const v14076 = v14072.B;
      const v14077 = v14073.A;
      const v14078 = v14073.B;
      const v14080 = v14074.protoFee;
      const v14081 = v14074.lpFee;
      const v14082 = v14074.totFee;
      const v14083 = stdlib.lt(v14080, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v14084 = stdlib.lt(v14081, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v14085 = v14083 ? v14084 : false;
      const v14086 = stdlib.add(v14081, v14080);
      const v14087 = stdlib.eq(v14082, v14086);
      const v14088 = v14085 ? v14087 : false;
      const v14089 = stdlib.lt(v14082, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v14090 = v14088 ? v14089 : false;
      const v14091 = stdlib.gt(v14082, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v14092 = v14090 ? v14091 : false;
      stdlib.assert(v14092, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v14094 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v14094, {
        at: '275:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v14095;
      if (v14071) {
        const v14100 = stdlib.eq(v14076, stdlib.checkedBigNumberify('./index.rsh:262:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v14100, {
          at: './index.rsh:262:10:application',
          fs: ['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v14109 = stdlib.add(v14077, v14075);
        const v14117 = stdlib.muldiv(v14075, v14078, v14109);
        const v14118 = stdlib.cast(false, true, v14075);
        const v14119 = stdlib.cast(false, true, v14082);
        const v14120 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14119);
        const v14121 = stdlib.mul256(v14118, v14120);
        const v14122 = stdlib.cast(false, true, v14109);
        const v14123 = stdlib.mul256(v14122, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v14124 = stdlib.add256(v14123, v14121);
        const v14125 = stdlib.cast(false, true, v14078);
        const v14126 = stdlib.mul256(v14121, v14125);
        const v14127 = stdlib.div256(v14126, v14124);
        const v14128 = stdlib.cast(true, false, v14127);
        const v14133 = stdlib.sub(v14117, v14128);
        const v14137 = stdlib.mul(v14080, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v14138 = stdlib.div(v14137, v14082);
        const v14144 = stdlib.muldiv(v14133, v14138, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v14149 = stdlib.muldiv(v14075, v14080, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v14157 = stdlib.muldiv(v14149, v14078, v14109);
        const v14158 = stdlib.gt(v14157, v14144);
        const v14159 = [v14149, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v14160 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14144];
        const v14161 = v14158 ? v14159 : v14160;
        const v14163 = v14161[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
        const v14164 = v14161[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
        const v14166 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v14128
          };
        const v14168 = {
          A: v14163,
          B: v14164
          };
        const v14169 = [v14166, v14168];
        v14095 = v14169;
        }
      else {
        const v14170 = stdlib.eq(v14075, stdlib.checkedBigNumberify('./index.rsh:267:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v14170, {
          at: './index.rsh:267:10:application',
          fs: ['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v14179 = stdlib.add(v14078, v14076);
        const v14187 = stdlib.muldiv(v14076, v14077, v14179);
        const v14188 = stdlib.cast(false, true, v14076);
        const v14189 = stdlib.cast(false, true, v14082);
        const v14190 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14189);
        const v14191 = stdlib.mul256(v14188, v14190);
        const v14192 = stdlib.cast(false, true, v14179);
        const v14193 = stdlib.mul256(v14192, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v14194 = stdlib.add256(v14193, v14191);
        const v14195 = stdlib.cast(false, true, v14077);
        const v14196 = stdlib.mul256(v14191, v14195);
        const v14197 = stdlib.div256(v14196, v14194);
        const v14198 = stdlib.cast(true, false, v14197);
        const v14203 = stdlib.sub(v14187, v14198);
        const v14207 = stdlib.mul(v14080, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v14208 = stdlib.div(v14207, v14082);
        const v14214 = stdlib.muldiv(v14203, v14208, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v14219 = stdlib.muldiv(v14076, v14080, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v14227 = stdlib.muldiv(v14219, v14077, v14179);
        const v14228 = stdlib.gt(v14227, v14214);
        const v14229 = [v14219, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v14230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14214];
        const v14231 = v14228 ? v14229 : v14230;
        const v14233 = v14231[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
        const v14234 = v14231[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
        const v14236 = {
          A: v14198,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v14238 = {
          A: v14234,
          B: v14233
          };
        const v14239 = [v14236, v14238];
        v14095 = v14239;
        }
      const v14240 = v14095[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '0')];
      const v14241 = v14095[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '1')];
      const v14242 = v14240.A;
      const v14243 = v14240.B;
      const v14244 = v14241.A;
      const v14245 = v14241.B;
      const v14246 = {
        A: v14242,
        B: v14243
        };
      const v14247 = {
        A: v14244,
        B: v14245
        };
      const v14248 = [v14246, v14247];
      
      return v14248;})
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc0], ['locked', ctc3]]);
  return {
    Deposit: [ctc0, ctc2, ctc1, ctc2, ctc2],
    Harvest: [ctc4],
    Swap: [ctc0, ctc2, ctc2, ctc2],
    Withdraw: [ctc0, ctc1, ctc2, ctc2, ctc2]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc9 = stdlib.T_Struct([['liquidityToken', ctc0], ['lptBals', ctc8], ['poolBals', ctc8], ['protoInfo', ctc7], ['protoBals', ctc8], ['tokB', ctc0], ['tokA', ctc2]]);
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v18294, v18295, v18324, v18352, v18386, v18387, v18388, v18389] = svs;
            return (await ((async () => {
              
              const v25013 = v18386.A;
              const v25014 = v18386.B;
              const v25015 = v18387.A;
              const v25016 = v18387.B;
              const v25017 = v18389.protoFee;
              const v25018 = v18389.lpFee;
              const v25019 = v18389.totFee;
              const v25020 = v18389.protoAddr;
              const v25021 = v18389.locked;
              const v25022 = v18388.A;
              const v25023 = v18388.B;
              const v25024 = {
                A: v25013,
                B: v25014
                };
              const v25025 = {
                A: v25015,
                B: v25016
                };
              const v25026 = {
                locked: v25021,
                lpFee: v25018,
                protoAddr: v25020,
                protoFee: v25017,
                totFee: v25019
                };
              const v25027 = {
                A: v25022,
                B: v25023
                };
              const v25029 = {
                liquidityToken: v18352,
                lptBals: v25024,
                poolBals: v25025,
                protoBals: v25027,
                protoInfo: v25026,
                tokA: v18324,
                tokB: v18295
                };
              
              return v25029;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393] = svs;
            return (await ((async () => {
              
              const v18462 = v18386.A;
              const v18463 = v18386.B;
              const v18464 = v18387.A;
              const v18465 = v18387.B;
              const v18466 = v18389.protoFee;
              const v18467 = v18389.lpFee;
              const v18468 = v18389.totFee;
              const v18469 = v18389.protoAddr;
              const v18470 = v18389.locked;
              const v18471 = v18388.A;
              const v18472 = v18388.B;
              const v18473 = {
                A: v18462,
                B: v18463
                };
              const v18474 = {
                A: v18464,
                B: v18465
                };
              const v18475 = {
                locked: v18470,
                lpFee: v18467,
                protoAddr: v18469,
                protoFee: v18466,
                totFee: v18468
                };
              const v18476 = {
                A: v18471,
                B: v18472
                };
              const v18478 = {
                liquidityToken: v18352,
                lptBals: v18473,
                poolBals: v18474,
                protoBals: v18476,
                protoInfo: v18475,
                tokA: v18324,
                tokB: v18295
                };
              
              return v18478;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      2: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7],
      4: [ctc5, ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc15 = stdlib.T_Data({
    Protocol_harvest0_14502: ctc10,
    Provider_deposit0_14502: ctc12,
    Provider_withdraw0_14502: ctc13,
    Trader_swapAForB0_14502: ctc14,
    Trader_swapBForA0_14502: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc11, ctc4]);
  const ctc17 = stdlib.T_Tuple([]);
  
  
  const v18282 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v18283 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v18284 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v18285 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v18286 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v18290 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v18290, {
    at: './index.rsh:348:10:application',
    fs: ['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v18291 = stdlib.tokenEq(v18285, v18286);
  const v18292 = v18291 ? false : true;
  stdlib.assert(v18292, {
    at: './index.rsh:349:10:application',
    fs: ['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v18285, v18286, v18282, v18283, v18284],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:358:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:358:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v18294, v18295, v18296, v18297, v18298], secs: v18300, time: v18299, didSend: v14280, from: v18293 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v18294
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v18295
        });
      ;
      const v18321 = await ctc.getContractInfo();
      const v18324 = ['Some', v18294];
      const v18325 = [stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        accs: [],
        bills: stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'),
        fees: stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'),
        kind: 'remote',
        obj: v18298,
        pays: stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'),
        toks: []
        })), undefined)];
      const v18326 = await txn1.getOutput('internal', 'v18325', ctc8, v18325);
      const v18328 = v18326[stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0')];
      const v18329 = v18326[stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '1')];
      const v18348 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v18349 = '                                                                                                ';
      const v18350 = '                                ';
      const v18351 = stdlib.simTokenNew(sim_r, v18296, v18297, v18349, v18350, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v18352 = await txn1.getOutput('internal', 'v18351', ctc3, v18351);
      
      const v18383 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v18385 = false;
      const v18386 = v18348;
      const v18387 = v18383;
      const v18388 = v18383;
      const v18389 = v18329;
      const v18390 = v18299;
      const v18393 = v18328;
      
      if (await (async () => {
        const v18461 = v18385 ? false : true;
        
        return v18461;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v18294, v18295, v18296, v18297, v18298], secs: v18300, time: v18299, didSend: v14280, from: v18293 } = txn1;
  const v18302 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v18302, {
    at: './index.rsh:348:10:application',
    fs: ['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v18303 = stdlib.tokenEq(v18294, v18295);
  const v18304 = v18303 ? false : true;
  stdlib.assert(v18304, {
    at: './index.rsh:349:10:application',
    fs: ['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  ;
  ;
  ;
  const v18321 = await ctc.getContractInfo();
  const v18324 = ['Some', v18294];
  const v18325 = undefined /* Remote */;
  const v18326 = await txn1.getOutput('internal', 'v18325', ctc8, v18325);
  const v18328 = v18326[stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0')];
  const v18329 = v18326[stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '1')];
  const v18330 = v18329.protoFee;
  const v18331 = v18329.lpFee;
  const v18332 = v18329.totFee;
  const v18333 = stdlib.lt(v18330, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v18334 = stdlib.lt(v18331, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v18335 = v18333 ? v18334 : false;
  const v18336 = stdlib.add(v18331, v18330);
  const v18337 = stdlib.eq(v18332, v18336);
  const v18338 = v18335 ? v18337 : false;
  const v18339 = stdlib.lt(v18332, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v18340 = v18338 ? v18339 : false;
  const v18341 = stdlib.gt(v18332, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v18342 = v18340 ? v18341 : false;
  stdlib.assert(v18342, {
    at: './index.rsh:363:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v18347 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'), v18328);
  stdlib.assert(v18347, {
    at: './index.rsh:363:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v18348 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v18349 = '                                                                                                ';
  const v18350 = '                                ';
  const v18351 = undefined /* TokenNew */;
  const v18352 = await txn1.getOutput('internal', 'v18351', ctc3, v18351);
  const v18353 = [v18294, v18295];
  const v18354 = await stdlib.Array_asyncReduce([v18353], false, async([v18356], v18355, v18357) => {
    const v18358 = stdlib.tokenEq(v18352, v18356);
    const v18360 = v18355 ? v18355 : v18358;
    
    return v18360;})
  const v18361 = v18354 ? false : true;
  stdlib.assert(v18361, {
    at: './index.rsh:367:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  stdlib.protect(ctc9, await interact.signalPoolCreation(v18352), {
    at: './index.rsh:375:36:application',
    fs: ['at ./index.rsh:375:36:application call to [unknown function] (defined at: ./index.rsh:375:36:function exp)', 'at ./index.rsh:375:36:application call to "liftedInteract" (defined at: ./index.rsh:375:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v18383 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v18385 = false;
  let v18386 = v18348;
  let v18387 = v18383;
  let v18388 = v18383;
  let v18389 = v18329;
  let v18390 = v18299;
  let v18393 = v18328;
  
  while (await (async () => {
    const v18461 = v18385 ? false : true;
    
    return v18461;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn2;
    switch (v19405[0]) {
      case 'Protocol_harvest0_14502': {
        const v19408 = v19405[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        ;
        const v19862 = v19408[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '0')];
        const v19863 = v19408[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '1')];
        const v19864 = v18389.protoAddr;
        const v19865 = stdlib.addressEq(v18293, v19864);
        stdlib.assert(v19865, {
          at: './index.rsh:422:14:application',
          fs: ['at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v19866 = v19863.protoFee;
        const v19867 = v19863.lpFee;
        const v19868 = v19863.totFee;
        const v19869 = stdlib.lt(v19866, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
        const v19870 = stdlib.lt(v19867, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
        const v19871 = v19869 ? v19870 : false;
        const v19872 = stdlib.add(v19867, v19866);
        const v19873 = stdlib.eq(v19868, v19872);
        const v19874 = v19871 ? v19873 : false;
        const v19875 = stdlib.lt(v19868, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
        const v19876 = v19874 ? v19875 : false;
        const v19877 = stdlib.gt(v19868, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
        const v19878 = v19876 ? v19877 : false;
        stdlib.assert(v19878, {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:423:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v19880 = (stdlib.le(await ctc.getBalance(), v18393) ? stdlib.checkedBigNumberify('./index.rsh:424:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v18393));
        const v19881 = stdlib.add(v19880, v18393);
        const v19883 = v18386.B;
        const v19886 = v19863.locked;
        const v19887 = stdlib.eq(v19883, stdlib.checkedBigNumberify('./index.rsh:427:56:decimal', stdlib.UInt_max, '0'));
        const v19888 = v19886 ? v19887 : false;
        const v19889 = v18387.A;
        const v19890 = v18387.B;
        const v19891 = stdlib.eq(v19889, stdlib.checkedBigNumberify('./index.rsh:391:37:decimal', stdlib.UInt_max, '0'));
        const v19892 = stdlib.eq(v19890, stdlib.checkedBigNumberify('./index.rsh:391:47:decimal', stdlib.UInt_max, '0'));
        const v19893 = v19891 ? v19892 : false;
        const v19894 = v19888 ? v19893 : false;
        const v19895 = v18388.A;
        const v19896 = v18388.B;
        const v19926 = stdlib.sub(v19881, v19880);
        ;
        ;
        ;
        const v19953 = {
          A: v19895,
          B: v19896
          };
        const v19954 = [v19953, v19880];
        await txn2.getOutput('Protocol_harvest', 'v19954', ctc16, v19954);
        const v19982 = v19863.protoAddr;
        const v19984 = {
          locked: v19886,
          lpFee: v19867,
          protoAddr: v19982,
          protoFee: v19866,
          totFee: v19868
          };
        null;
        const cv18385 = v19894;
        const cv18386 = v18386;
        const cv18387 = v18387;
        const cv18388 = v18383;
        const cv18389 = v19863;
        const cv18390 = v19406;
        const cv18393 = v19926;
        
        v18385 = cv18385;
        v18386 = cv18386;
        v18387 = cv18387;
        v18388 = cv18388;
        v18389 = cv18389;
        v18390 = cv18390;
        v18393 = cv18393;
        
        continue;
        break;
        }
      case 'Provider_deposit0_14502': {
        const v20529 = v19405[1];
        undefined /* setApiDetails */;
        const v20553 = v20529[stdlib.checkedBigNumberify('./index.rsh:459:10:spread', stdlib.UInt_max, '0')];
        const v20554 = v18389.locked;
        const v20555 = v20554 ? false : true;
        stdlib.assert(v20555, {
          at: './index.rsh:460:12:application',
          fs: ['at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v20557 = v20553.A;
        const v20558 = v20553.B;
        const v20560 = v18386.B;
        const v20562 = stdlib.eq(v20560, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
        ;
        ;
        ;
        ;
        let v21115;
        const v21118 = v18386.A;
        if (v20562) {
          const v21122 = stdlib.cast(false, true, v20557);
          const v21123 = stdlib.cast(false, true, v20558);
          const v21124 = stdlib.mul256(v21122, v21123);
          const v21125 = stdlib.sqrt256(v21124);
          const v21126 = stdlib.cast(true, false, v21125);
          v21115 = v21126;
          }
        else {
          const v21127 = v18387.A;
          const v21128 = v18387.B;
          const v21132 = stdlib.muldiv(v20557, v20560, v21127);
          const v21136 = stdlib.muldiv(v20558, v20560, v21128);
          const v21137 = stdlib.lt(v21132, v21136);
          const v21138 = v21137 ? v21132 : v21136;
          v21115 = v21138;
          }
        const v21140 = v18387.A;
        const v21144 = stdlib.add(v20557, v21140);
        const v21146 = v18387.B;
        const v21150 = stdlib.add(v20558, v21146);
        const v21151 = {
          A: v21144,
          B: v21150
          };
        const v21158 = stdlib.sub(v21118, v21115);
        const v21162 = stdlib.add(v20560, v21115);
        const v21163 = {
          A: v21158,
          B: v21162
          };
        ;
        await txn2.getOutput('Provider_deposit', 'v21115', ctc4, v21115);
        const v21210 = {
          A: v20557,
          B: v20558
          };
        const v21211 = {
          A: v21144,
          B: v21150
          };
        const v21212 = {
          A: v21158,
          B: v21162
          };
        null;
        const cv18385 = false;
        const cv18386 = v21163;
        const cv18387 = v21151;
        const cv18388 = v18388;
        const cv18389 = v18389;
        const cv18390 = v19406;
        const cv18393 = v18393;
        
        v18385 = cv18385;
        v18386 = cv18386;
        v18387 = cv18387;
        v18388 = cv18388;
        v18389 = cv18389;
        v18390 = cv18390;
        v18393 = cv18393;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_14502': {
        const v21650 = v19405[1];
        undefined /* setApiDetails */;
        const v21750 = v21650[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v22341 = v18386.A;
        const v22342 = v18386.B;
        const v22345 = v18387.A;
        const v22346 = v18387.B;
        const v22350 = stdlib.muldiv(v21750, v22345, v22342);
        const v22354 = stdlib.muldiv(v21750, v22346, v22342);
        const v22363 = stdlib.add(v22341, v21750);
        const v22366 = stdlib.sub(v22342, v21750);
        const v22367 = {
          A: v22363,
          B: v22366
          };
        const v22372 = stdlib.sub(v22345, v22350);
        const v22376 = stdlib.sub(v22346, v22354);
        const v22377 = {
          A: v22372,
          B: v22376
          };
        ;
        ;
        const v22429 = {
          A: v22350,
          B: v22354
          };
        await txn2.getOutput('Provider_withdraw', 'v22429', ctc11, v22429);
        const v22439 = {
          A: v22372,
          B: v22376
          };
        const v22440 = {
          A: v22363,
          B: v22366
          };
        null;
        const cv18385 = false;
        const cv18386 = v22367;
        const cv18387 = v22377;
        const cv18388 = v18388;
        const cv18389 = v18389;
        const cv18390 = v19406;
        const cv18393 = v18393;
        
        v18385 = cv18385;
        v18386 = cv18386;
        v18387 = cv18387;
        v18388 = cv18388;
        v18389 = cv18389;
        v18390 = cv18390;
        v18393 = cv18393;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_14502': {
        const v22771 = v19405[1];
        undefined /* setApiDetails */;
        const v22926 = v22771[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '0')];
        const v22927 = v22771[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '1')];
        const v22930 = v18389.locked;
        const v22931 = v22930 ? false : true;
        stdlib.assert(v22931, {
          at: './index.rsh:474:14:application',
          fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v22932 = v18387.A;
        const v22933 = v18387.B;
        const v22934 = v18389.protoFee;
        const v22935 = v18389.totFee;
        const v22939 = stdlib.add(v22932, v22926);
        const v22943 = stdlib.muldiv(v22926, v22933, v22939);
        const v22944 = stdlib.cast(false, true, v22926);
        const v22945 = stdlib.cast(false, true, v22935);
        const v22946 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v22945);
        const v22947 = stdlib.mul256(v22944, v22946);
        const v22948 = stdlib.cast(false, true, v22939);
        const v22949 = stdlib.mul256(v22948, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v22950 = stdlib.add256(v22949, v22947);
        const v22951 = stdlib.cast(false, true, v22933);
        const v22952 = stdlib.mul256(v22947, v22951);
        const v22953 = stdlib.div256(v22952, v22950);
        const v22954 = stdlib.cast(true, false, v22953);
        const v22957 = stdlib.sub(v22943, v22954);
        const v22960 = stdlib.mul(v22934, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v22961 = stdlib.div(v22960, v22935);
        const v22964 = stdlib.muldiv(v22957, v22961, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v22966 = stdlib.muldiv(v22926, v22934, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v22970 = stdlib.muldiv(v22966, v22933, v22939);
        const v22971 = stdlib.gt(v22970, v22964);
        const v22972 = [v22966, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v22973 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v22964];
        const v22974 = v22971 ? v22972 : v22973;
        const v22976 = v22974[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
        const v22977 = v22974[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
        const v22996 = stdlib.sub(v22933, v22954);
        const v23000 = stdlib.sub(v22939, v22976);
        const v23003 = stdlib.sub(v22996, v22977);
        const v23016 = stdlib.le(v22927, v22954);
        stdlib.assert(v23016, {
          at: './index.rsh:495:14:application',
          fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v23019 = stdlib.cast(false, true, v22932);
        const v23021 = stdlib.mul256(v23019, v22951);
        const v23022 = stdlib.cast(false, true, v23000);
        const v23023 = stdlib.cast(false, true, v23003);
        const v23024 = stdlib.mul256(v23022, v23023);
        const v23025 = stdlib.ge256(v23024, v23021);
        stdlib.assert(v23025, {
          at: './index.rsh:505:14:application',
          fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v23646 = {
          A: v23000,
          B: v23003
          };
        const v23647 = v18388.A;
        const v23651 = stdlib.add(v23647, v22976);
        const v23652 = v18388.B;
        const v23656 = stdlib.add(v23652, v22977);
        const v23657 = {
          A: v23651,
          B: v23656
          };
        ;
        const v23708 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v22954
          };
        await txn2.getOutput('Trader_swapAForB', 'v23708', ctc11, v23708);
        const v23718 = {
          A: v22926,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v23720 = {
          A: v23000,
          B: v23003
          };
        null;
        const cv18385 = false;
        const cv18386 = v18386;
        const cv18387 = v23646;
        const cv18388 = v23657;
        const cv18389 = v18389;
        const cv18390 = v19406;
        const cv18393 = v18393;
        
        v18385 = cv18385;
        v18386 = cv18386;
        v18387 = cv18387;
        v18388 = cv18388;
        v18389 = cv18389;
        v18390 = cv18390;
        v18393 = cv18393;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_14502': {
        const v23892 = v19405[1];
        undefined /* setApiDetails */;
        const v24164 = v23892[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '0')];
        const v24165 = v23892[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '1')];
        const v24168 = v18389.locked;
        const v24169 = v24168 ? false : true;
        stdlib.assert(v24169, {
          at: './index.rsh:474:14:application',
          fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v24170 = v18387.A;
        const v24171 = v18387.B;
        const v24172 = v18389.protoFee;
        const v24173 = v18389.totFee;
        const v24177 = stdlib.add(v24171, v24164);
        const v24181 = stdlib.muldiv(v24164, v24170, v24177);
        const v24182 = stdlib.cast(false, true, v24164);
        const v24183 = stdlib.cast(false, true, v24173);
        const v24184 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v24183);
        const v24185 = stdlib.mul256(v24182, v24184);
        const v24186 = stdlib.cast(false, true, v24177);
        const v24187 = stdlib.mul256(v24186, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24188 = stdlib.add256(v24187, v24185);
        const v24189 = stdlib.cast(false, true, v24170);
        const v24190 = stdlib.mul256(v24185, v24189);
        const v24191 = stdlib.div256(v24190, v24188);
        const v24192 = stdlib.cast(true, false, v24191);
        const v24195 = stdlib.sub(v24181, v24192);
        const v24198 = stdlib.mul(v24172, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v24199 = stdlib.div(v24198, v24173);
        const v24202 = stdlib.muldiv(v24195, v24199, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v24204 = stdlib.muldiv(v24164, v24172, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v24208 = stdlib.muldiv(v24204, v24170, v24177);
        const v24209 = stdlib.gt(v24208, v24202);
        const v24210 = [v24204, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24211 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24202];
        const v24212 = v24209 ? v24210 : v24211;
        const v24214 = v24212[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
        const v24215 = v24212[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
        const v24232 = stdlib.sub(v24170, v24192);
        const v24238 = stdlib.sub(v24232, v24215);
        const v24241 = stdlib.sub(v24177, v24214);
        const v24254 = stdlib.le(v24165, v24192);
        stdlib.assert(v24254, {
          at: './index.rsh:495:14:application',
          fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v24259 = stdlib.cast(false, true, v24171);
        const v24260 = stdlib.mul256(v24189, v24259);
        const v24261 = stdlib.cast(false, true, v24238);
        const v24262 = stdlib.cast(false, true, v24241);
        const v24263 = stdlib.mul256(v24261, v24262);
        const v24264 = stdlib.ge256(v24263, v24260);
        stdlib.assert(v24264, {
          at: './index.rsh:505:14:application',
          fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v24929 = {
          A: v24238,
          B: v24241
          };
        const v24930 = v18388.A;
        const v24934 = stdlib.add(v24930, v24215);
        const v24935 = v18388.B;
        const v24939 = stdlib.add(v24935, v24214);
        const v24940 = {
          A: v24934,
          B: v24939
          };
        ;
        const v24992 = {
          A: v24192,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn2.getOutput('Trader_swapBForA', 'v24992', ctc11, v24992);
        const v25002 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v24164
          };
        const v25004 = {
          A: v24238,
          B: v24241
          };
        null;
        const cv18385 = false;
        const cv18386 = v18386;
        const cv18387 = v24929;
        const cv18388 = v24940;
        const cv18389 = v18389;
        const cv18390 = v19406;
        const cv18393 = v18393;
        
        v18385 = cv18385;
        v18386 = cv18386;
        v18387 = cv18387;
        v18388 = cv18388;
        v18389 = cv18389;
        v18390 = cv18390;
        v18393 = cv18393;
        
        continue;
        break;
        }
      }
    
    }
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc17],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v25040], secs: v25042, time: v25041, didSend: v17792, from: v25039 } = txn2;
  undefined /* setApiDetails */;
  ;
  const v25043 = null;
  await txn2.getOutput('Protocol_delete', 'v25043', ctc9, v25043);
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  
  };
export async function _Protocol_delete2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Protocol_delete2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Protocol_delete2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const [v18294, v18295, v18324, v18352, v18386, v18387, v18388, v18389] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v25038 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:525:3:application',
    fs: ['at ./index.rsh:525:3:application call to [unknown function] (defined at: ./index.rsh:525:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v18294, v18295, v18324, v18352, v18386, v18387, v18388, v18389, v25038],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:525:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25040], secs: v25042, time: v25041, didSend: v17792, from: v25039 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v25043 = null;
      const v25044 = await txn1.getOutput('Protocol_delete', 'v25043', ctc1, v25043);
      
      stdlib.simTokenBurn(sim_r, v18352, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v18352);
      sim_r.txns.push({
        kind: 'halt',
        tok: v18295
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v18294
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v25040], secs: v25042, time: v25041, didSend: v17792, from: v25039 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v25043 = null;
  const v25044 = await txn1.getOutput('Protocol_delete', 'v25043', ctc1, v25043);
  stdlib.protect(ctc1, await interact.out(v25040, v25044), {
    at: './index.rsh:525:3:application',
    fs: ['at ./index.rsh:525:3:application call to [unknown function] (defined at: ./index.rsh:525:3:function exp)', 'at ./index.rsh:526:4:application call to "k" (defined at: ./index.rsh:525:3:function exp)'],
    msg: 'out',
    who: 'Protocol_delete'
    });
  
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  };
export async function _Protocol_harvest4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Protocol_harvest4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Protocol_harvest4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_14502: ctc8,
    Provider_deposit0_14502: ctc10,
    Provider_withdraw0_14502: ctc11,
    Trader_swapAForB0_14502: ctc12,
    Trader_swapBForA0_14502: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc9, ctc4]);
  
  
  const [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v18487 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)', 'at ./index.rsh:378:19:application call to "runProtocol_harvest0_14502" (defined at: ./index.rsh:438:9:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v18489 = v18487[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v18490 = v18489.protoFee;
  const v18491 = v18489.lpFee;
  const v18492 = v18489.totFee;
  const v18493 = stdlib.lt(v18490, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v18494 = stdlib.lt(v18491, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v18495 = v18493 ? v18494 : false;
  const v18496 = stdlib.add(v18491, v18490);
  const v18497 = stdlib.eq(v18492, v18496);
  const v18498 = v18495 ? v18497 : false;
  const v18499 = stdlib.lt(v18492, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v18500 = v18498 ? v18499 : false;
  const v18501 = stdlib.gt(v18492, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v18502 = v18500 ? v18501 : false;
  stdlib.assert(v18502, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)', 'at ./index.rsh:378:19:application call to "runProtocol_harvest0_14502" (defined at: ./index.rsh:438:9:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v18506 = v18389.protoAddr;
  const v18507 = stdlib.addressEq(v18293, v18506);
  stdlib.assert(v18507, {
    at: './index.rsh:422:14:application',
    fs: ['at ./index.rsh:440:28:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)', 'at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)', 'at ./index.rsh:378:19:application call to "runProtocol_harvest0_14502" (defined at: ./index.rsh:438:9:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  (stdlib.le(await ctc.getBalance(), v18393) ? stdlib.checkedBigNumberify('./index.rsh:424:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v18393));
  const v18546 = ['Protocol_harvest0_14502', v18487];
  
  const txn1 = await (ctc.sendrecv({
    args: [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393, v18546],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:442:25:decimal', stdlib.UInt_max, '0'), v18352], [stdlib.checkedBigNumberify('./index.rsh:442:28:decimal', stdlib.UInt_max, '0'), v18294], [stdlib.checkedBigNumberify('./index.rsh:442:31:decimal', stdlib.UInt_max, '0'), v18295]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
      
      switch (v19405[0]) {
        case 'Protocol_harvest0_14502': {
          const v19408 = v19405[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          ;
          ;
          ;
          const v19862 = v19408[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '0')];
          const v19863 = v19408[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '1')];
          const v19866 = v19863.protoFee;
          const v19867 = v19863.lpFee;
          const v19868 = v19863.totFee;
          const v19880 = (stdlib.le(await ctc.getBalance(), v18393) ? stdlib.checkedBigNumberify('./index.rsh:424:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v18393));
          const v19881 = stdlib.add(v19880, v18393);
          const v19883 = v18386.B;
          const v19886 = v19863.locked;
          const v19887 = stdlib.eq(v19883, stdlib.checkedBigNumberify('./index.rsh:427:56:decimal', stdlib.UInt_max, '0'));
          const v19888 = v19886 ? v19887 : false;
          const v19889 = v18387.A;
          const v19890 = v18387.B;
          const v19891 = stdlib.eq(v19889, stdlib.checkedBigNumberify('./index.rsh:391:37:decimal', stdlib.UInt_max, '0'));
          const v19892 = stdlib.eq(v19890, stdlib.checkedBigNumberify('./index.rsh:391:47:decimal', stdlib.UInt_max, '0'));
          const v19893 = v19891 ? v19892 : false;
          const v19894 = v19888 ? v19893 : false;
          const v19895 = v18388.A;
          const v19896 = v18388.B;
          const v19926 = stdlib.sub(v19881, v19880);
          sim_r.txns.push({
            kind: 'from',
            to: v19862,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v19862,
            tok: v18294
            });
          sim_r.txns.push({
            kind: 'from',
            to: v19862,
            tok: v18295
            });
          const v19953 = {
            A: v19895,
            B: v19896
            };
          const v19954 = [v19953, v19880];
          const v19955 = await txn1.getOutput('Protocol_harvest', 'v19954', ctc14, v19954);
          
          const v19982 = v19863.protoAddr;
          const v19984 = {
            locked: v19886,
            lpFee: v19867,
            protoAddr: v19982,
            protoFee: v19866,
            totFee: v19868
            };
          null;
          const v28903 = v18386;
          const v28904 = v18387;
          const v28905 = v18383;
          const v28906 = v19863;
          const v28908 = v19926;
          if (v19894) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_14502': {
          const v20529 = v19405[1];
          
          break;
          }
        case 'Provider_withdraw0_14502': {
          const v21650 = v19405[1];
          
          break;
          }
        case 'Trader_swapAForB0_14502': {
          const v22771 = v19405[1];
          
          break;
          }
        case 'Trader_swapBForA0_14502': {
          const v23892 = v19405[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
  switch (v19405[0]) {
    case 'Protocol_harvest0_14502': {
      const v19408 = v19405[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      ;
      const v19862 = v19408[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '0')];
      const v19863 = v19408[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '1')];
      const v19864 = v18389.protoAddr;
      const v19865 = stdlib.addressEq(v18293, v19864);
      stdlib.assert(v19865, {
        at: './index.rsh:422:14:application',
        fs: ['at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v19866 = v19863.protoFee;
      const v19867 = v19863.lpFee;
      const v19868 = v19863.totFee;
      const v19869 = stdlib.lt(v19866, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v19870 = stdlib.lt(v19867, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v19871 = v19869 ? v19870 : false;
      const v19872 = stdlib.add(v19867, v19866);
      const v19873 = stdlib.eq(v19868, v19872);
      const v19874 = v19871 ? v19873 : false;
      const v19875 = stdlib.lt(v19868, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v19876 = v19874 ? v19875 : false;
      const v19877 = stdlib.gt(v19868, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v19878 = v19876 ? v19877 : false;
      stdlib.assert(v19878, {
        at: './index.rsh:78:29:application',
        fs: ['at ./index.rsh:423:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v19880 = (stdlib.le(await ctc.getBalance(), v18393) ? stdlib.checkedBigNumberify('./index.rsh:424:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v18393));
      const v19881 = stdlib.add(v19880, v18393);
      const v19883 = v18386.B;
      const v19886 = v19863.locked;
      const v19887 = stdlib.eq(v19883, stdlib.checkedBigNumberify('./index.rsh:427:56:decimal', stdlib.UInt_max, '0'));
      const v19888 = v19886 ? v19887 : false;
      const v19889 = v18387.A;
      const v19890 = v18387.B;
      const v19891 = stdlib.eq(v19889, stdlib.checkedBigNumberify('./index.rsh:391:37:decimal', stdlib.UInt_max, '0'));
      const v19892 = stdlib.eq(v19890, stdlib.checkedBigNumberify('./index.rsh:391:47:decimal', stdlib.UInt_max, '0'));
      const v19893 = v19891 ? v19892 : false;
      const v19894 = v19888 ? v19893 : false;
      const v19895 = v18388.A;
      const v19896 = v18388.B;
      const v19926 = stdlib.sub(v19881, v19880);
      ;
      ;
      ;
      const v19953 = {
        A: v19895,
        B: v19896
        };
      const v19954 = [v19953, v19880];
      const v19955 = await txn1.getOutput('Protocol_harvest', 'v19954', ctc14, v19954);
      if (v16940) {
        stdlib.protect(ctc2, await interact.out(v19408, v19955), {
          at: './index.rsh:438:10:application',
          fs: ['at ./index.rsh:438:10:application call to [unknown function] (defined at: ./index.rsh:438:10:function exp)', 'at ./index.rsh:430:12:application call to "k" (defined at: ./index.rsh:443:30:function exp)', 'at ./index.rsh:444:44:application call to [unknown function] (defined at: ./index.rsh:428:20:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v19982 = v19863.protoAddr;
      const v19984 = {
        locked: v19886,
        lpFee: v19867,
        protoAddr: v19982,
        protoFee: v19866,
        totFee: v19868
        };
      null;
      const v28903 = v18386;
      const v28904 = v18387;
      const v28905 = v18383;
      const v28906 = v19863;
      const v28908 = v19926;
      if (v19894) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_14502': {
      const v20529 = v19405[1];
      return;
      break;
      }
    case 'Provider_withdraw0_14502': {
      const v21650 = v19405[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_14502': {
      const v22771 = v19405[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_14502': {
      const v23892 = v19405[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_deposit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_deposit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_deposit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_14502: ctc10,
    Provider_deposit0_14502: ctc9,
    Provider_withdraw0_14502: ctc11,
    Trader_swapAForB0_14502: ctc12,
    Trader_swapBForA0_14502: ctc12
    });
  
  
  const [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v18599 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to "runProvider_deposit0_14502" (defined at: ./index.rsh:459:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v18600 = v18599[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v18601 = v18600.A;
  const v18602 = v18600.B;
  const v18604 = v18389.locked;
  const v18605 = v18604 ? false : true;
  stdlib.assert(v18605, {
    at: './index.rsh:460:12:application',
    fs: ['at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to "runProvider_deposit0_14502" (defined at: ./index.rsh:459:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  const v18663 = ['Provider_deposit0_14502', v18599];
  
  const txn1 = await (ctc.sendrecv({
    args: [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393, v18663],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:374:36:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:374:50:decimal', stdlib.UInt_max, '0'), v18352], [v18601, v18294], [v18602, v18295]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
      
      switch (v19405[0]) {
        case 'Protocol_harvest0_14502': {
          const v19408 = v19405[1];
          
          break;
          }
        case 'Provider_deposit0_14502': {
          const v20529 = v19405[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v20553 = v20529[stdlib.checkedBigNumberify('./index.rsh:459:10:spread', stdlib.UInt_max, '0')];
          const v20557 = v20553.A;
          const v20558 = v20553.B;
          const v20560 = v18386.B;
          const v20562 = stdlib.eq(v20560, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          sim_r.txns.push({
            amt: v20557,
            kind: 'to',
            tok: v18294
            });
          sim_r.txns.push({
            amt: v20558,
            kind: 'to',
            tok: v18295
            });
          let v21115;
          const v21118 = v18386.A;
          if (v20562) {
            const v21122 = stdlib.cast(false, true, v20557);
            const v21123 = stdlib.cast(false, true, v20558);
            const v21124 = stdlib.mul256(v21122, v21123);
            const v21125 = stdlib.sqrt256(v21124);
            const v21126 = stdlib.cast(true, false, v21125);
            v21115 = v21126;
            }
          else {
            const v21127 = v18387.A;
            const v21128 = v18387.B;
            const v21132 = stdlib.muldiv(v20557, v20560, v21127);
            const v21136 = stdlib.muldiv(v20558, v20560, v21128);
            const v21137 = stdlib.lt(v21132, v21136);
            const v21138 = v21137 ? v21132 : v21136;
            v21115 = v21138;
            }
          const v21140 = v18387.A;
          const v21144 = stdlib.add(v20557, v21140);
          const v21146 = v18387.B;
          const v21150 = stdlib.add(v20558, v21146);
          const v21151 = {
            A: v21144,
            B: v21150
            };
          const v21158 = stdlib.sub(v21118, v21115);
          const v21162 = stdlib.add(v20560, v21115);
          const v21163 = {
            A: v21158,
            B: v21162
            };
          sim_r.txns.push({
            kind: 'from',
            to: v19404,
            tok: v18352
            });
          const v21200 = await txn1.getOutput('Provider_deposit', 'v21115', ctc4, v21115);
          
          const v21210 = {
            A: v20557,
            B: v20558
            };
          const v21211 = {
            A: v21144,
            B: v21150
            };
          const v21212 = {
            A: v21158,
            B: v21162
            };
          null;
          const v28993 = v21163;
          const v28994 = v21151;
          const v28995 = v18388;
          const v28996 = v18389;
          const v28998 = v18393;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_14502': {
          const v21650 = v19405[1];
          
          break;
          }
        case 'Trader_swapAForB0_14502': {
          const v22771 = v19405[1];
          
          break;
          }
        case 'Trader_swapBForA0_14502': {
          const v23892 = v19405[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
  switch (v19405[0]) {
    case 'Protocol_harvest0_14502': {
      const v19408 = v19405[1];
      return;
      break;
      }
    case 'Provider_deposit0_14502': {
      const v20529 = v19405[1];
      undefined /* setApiDetails */;
      const v20553 = v20529[stdlib.checkedBigNumberify('./index.rsh:459:10:spread', stdlib.UInt_max, '0')];
      const v20554 = v18389.locked;
      const v20555 = v20554 ? false : true;
      stdlib.assert(v20555, {
        at: './index.rsh:460:12:application',
        fs: ['at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      const v20557 = v20553.A;
      const v20558 = v20553.B;
      const v20560 = v18386.B;
      const v20562 = stdlib.eq(v20560, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
      ;
      ;
      ;
      ;
      let v21115;
      const v21118 = v18386.A;
      if (v20562) {
        const v21122 = stdlib.cast(false, true, v20557);
        const v21123 = stdlib.cast(false, true, v20558);
        const v21124 = stdlib.mul256(v21122, v21123);
        const v21125 = stdlib.sqrt256(v21124);
        const v21126 = stdlib.cast(true, false, v21125);
        v21115 = v21126;
        }
      else {
        const v21127 = v18387.A;
        const v21128 = v18387.B;
        const v21132 = stdlib.muldiv(v20557, v20560, v21127);
        const v21136 = stdlib.muldiv(v20558, v20560, v21128);
        const v21137 = stdlib.lt(v21132, v21136);
        const v21138 = v21137 ? v21132 : v21136;
        v21115 = v21138;
        }
      const v21140 = v18387.A;
      const v21144 = stdlib.add(v20557, v21140);
      const v21146 = v18387.B;
      const v21150 = stdlib.add(v20558, v21146);
      const v21151 = {
        A: v21144,
        B: v21150
        };
      const v21158 = stdlib.sub(v21118, v21115);
      const v21162 = stdlib.add(v20560, v21115);
      const v21163 = {
        A: v21158,
        B: v21162
        };
      ;
      const v21200 = await txn1.getOutput('Provider_deposit', 'v21115', ctc4, v21115);
      if (v16940) {
        stdlib.protect(ctc2, await interact.out(v20529, v21200), {
          at: './index.rsh:459:11:application',
          fs: ['at ./index.rsh:459:11:application call to [unknown function] (defined at: ./index.rsh:459:11:function exp)', 'at ./index.rsh:467:10:application call to "k" (defined at: ./index.rsh:465:39:function exp)', 'at ./index.rsh:465:39:application call to [unknown function] (defined at: ./index.rsh:465:39:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v21210 = {
        A: v20557,
        B: v20558
        };
      const v21211 = {
        A: v21144,
        B: v21150
        };
      const v21212 = {
        A: v21158,
        B: v21162
        };
      null;
      const v28993 = v21163;
      const v28994 = v21151;
      const v28995 = v18388;
      const v28996 = v18389;
      const v28998 = v18393;
      return;
      
      break;
      }
    case 'Provider_withdraw0_14502': {
      const v21650 = v19405[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_14502': {
      const v22771 = v19405[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_14502': {
      const v23892 = v19405[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_14502: ctc9,
    Provider_deposit0_14502: ctc11,
    Provider_withdraw0_14502: ctc8,
    Trader_swapAForB0_14502: ctc12,
    Trader_swapBForA0_14502: ctc12
    });
  
  
  const [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v18550 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:447:35:application call to [unknown function] (defined at: ./index.rsh:447:35:function exp)', 'at ./index.rsh:378:19:application call to "runProvider_withdraw0_14502" (defined at: ./index.rsh:447:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v18551 = v18550[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v18595 = ['Provider_withdraw0_14502', v18550];
  
  const txn1 = await (ctc.sendrecv({
    args: [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393, v18595],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:34:decimal', stdlib.UInt_max, '0'), [[v18551, v18352], [stdlib.checkedBigNumberify('./index.rsh:452:28:decimal', stdlib.UInt_max, '0'), v18294], [stdlib.checkedBigNumberify('./index.rsh:452:31:decimal', stdlib.UInt_max, '0'), v18295]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
      
      switch (v19405[0]) {
        case 'Protocol_harvest0_14502': {
          const v19408 = v19405[1];
          
          break;
          }
        case 'Provider_deposit0_14502': {
          const v20529 = v19405[1];
          
          break;
          }
        case 'Provider_withdraw0_14502': {
          const v21650 = v19405[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v21750 = v21650[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v21750,
            kind: 'to',
            tok: v18352
            });
          ;
          ;
          const v22341 = v18386.A;
          const v22342 = v18386.B;
          const v22345 = v18387.A;
          const v22346 = v18387.B;
          const v22350 = stdlib.muldiv(v21750, v22345, v22342);
          const v22354 = stdlib.muldiv(v21750, v22346, v22342);
          const v22363 = stdlib.add(v22341, v21750);
          const v22366 = stdlib.sub(v22342, v21750);
          const v22367 = {
            A: v22363,
            B: v22366
            };
          const v22372 = stdlib.sub(v22345, v22350);
          const v22376 = stdlib.sub(v22346, v22354);
          const v22377 = {
            A: v22372,
            B: v22376
            };
          sim_r.txns.push({
            kind: 'from',
            to: v19404,
            tok: v18294
            });
          sim_r.txns.push({
            kind: 'from',
            to: v19404,
            tok: v18295
            });
          const v22429 = {
            A: v22350,
            B: v22354
            };
          const v22430 = await txn1.getOutput('Provider_withdraw', 'v22429', ctc10, v22429);
          
          const v22439 = {
            A: v22372,
            B: v22376
            };
          const v22440 = {
            A: v22363,
            B: v22366
            };
          null;
          const v29083 = v22367;
          const v29084 = v22377;
          const v29085 = v18388;
          const v29086 = v18389;
          const v29088 = v18393;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_14502': {
          const v22771 = v19405[1];
          
          break;
          }
        case 'Trader_swapBForA0_14502': {
          const v23892 = v19405[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
  switch (v19405[0]) {
    case 'Protocol_harvest0_14502': {
      const v19408 = v19405[1];
      return;
      break;
      }
    case 'Provider_deposit0_14502': {
      const v20529 = v19405[1];
      return;
      break;
      }
    case 'Provider_withdraw0_14502': {
      const v21650 = v19405[1];
      undefined /* setApiDetails */;
      const v21750 = v21650[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v22341 = v18386.A;
      const v22342 = v18386.B;
      const v22345 = v18387.A;
      const v22346 = v18387.B;
      const v22350 = stdlib.muldiv(v21750, v22345, v22342);
      const v22354 = stdlib.muldiv(v21750, v22346, v22342);
      const v22363 = stdlib.add(v22341, v21750);
      const v22366 = stdlib.sub(v22342, v21750);
      const v22367 = {
        A: v22363,
        B: v22366
        };
      const v22372 = stdlib.sub(v22345, v22350);
      const v22376 = stdlib.sub(v22346, v22354);
      const v22377 = {
        A: v22372,
        B: v22376
        };
      ;
      ;
      const v22429 = {
        A: v22350,
        B: v22354
        };
      const v22430 = await txn1.getOutput('Provider_withdraw', 'v22429', ctc10, v22429);
      if (v16940) {
        stdlib.protect(ctc2, await interact.out(v21650, v22430), {
          at: './index.rsh:447:11:application',
          fs: ['at ./index.rsh:447:11:application call to [unknown function] (defined at: ./index.rsh:447:11:function exp)', 'at ./index.rsh:454:10:application call to "k" (defined at: ./index.rsh:452:39:function exp)', 'at ./index.rsh:452:39:application call to [unknown function] (defined at: ./index.rsh:452:39:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v22439 = {
        A: v22372,
        B: v22376
        };
      const v22440 = {
        A: v22363,
        B: v22366
        };
      null;
      const v29083 = v22367;
      const v29084 = v22377;
      const v29085 = v18388;
      const v29086 = v18389;
      const v29088 = v18393;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_14502': {
      const v22771 = v19405[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_14502': {
      const v23892 = v19405[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_swapAForB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_swapAForB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_swapAForB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_14502: ctc9,
    Provider_deposit0_14502: ctc11,
    Provider_withdraw0_14502: ctc12,
    Trader_swapAForB0_14502: ctc8,
    Trader_swapBForA0_14502: ctc8
    });
  
  
  const [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v18667 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_14502" (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v18668 = v18667[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v18669 = v18667[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v18674 = v18389.locked;
  const v18675 = v18674 ? false : true;
  stdlib.assert(v18675, {
    at: './index.rsh:474:14:application',
    fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_14502" (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v18676 = v18387.A;
  const v18677 = v18387.B;
  const v18678 = v18389.protoFee;
  const v18679 = v18389.totFee;
  const v18683 = stdlib.add(v18676, v18668);
  const v18687 = stdlib.muldiv(v18668, v18677, v18683);
  const v18688 = stdlib.cast(false, true, v18668);
  const v18689 = stdlib.cast(false, true, v18679);
  const v18690 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18689);
  const v18691 = stdlib.mul256(v18688, v18690);
  const v18692 = stdlib.cast(false, true, v18683);
  const v18693 = stdlib.mul256(v18692, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v18694 = stdlib.add256(v18693, v18691);
  const v18695 = stdlib.cast(false, true, v18677);
  const v18696 = stdlib.mul256(v18691, v18695);
  const v18697 = stdlib.div256(v18696, v18694);
  const v18698 = stdlib.cast(true, false, v18697);
  const v18701 = stdlib.sub(v18687, v18698);
  const v18704 = stdlib.mul(v18678, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
  const v18705 = stdlib.div(v18704, v18679);
  const v18708 = stdlib.muldiv(v18701, v18705, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
  const v18710 = stdlib.muldiv(v18668, v18678, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
  const v18714 = stdlib.muldiv(v18710, v18677, v18683);
  const v18715 = stdlib.gt(v18714, v18708);
  const v18716 = [v18710, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v18717 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18708];
  const v18718 = v18715 ? v18716 : v18717;
  const v18720 = v18718[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
  const v18721 = v18718[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
  const v18740 = stdlib.sub(v18677, v18698);
  const v18744 = stdlib.sub(v18683, v18720);
  const v18747 = stdlib.sub(v18740, v18721);
  const v18760 = stdlib.le(v18669, v18698);
  stdlib.assert(v18760, {
    at: './index.rsh:495:14:application',
    fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_14502" (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v18763 = stdlib.cast(false, true, v18676);
  const v18765 = stdlib.mul256(v18763, v18695);
  const v18766 = stdlib.cast(false, true, v18744);
  const v18767 = stdlib.cast(false, true, v18747);
  const v18768 = stdlib.mul256(v18766, v18767);
  const v18769 = stdlib.ge256(v18768, v18765);
  stdlib.assert(v18769, {
    at: './index.rsh:505:14:application',
    fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_14502" (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v18777 = ['Trader_swapAForB0_14502', v18667];
  
  const txn1 = await (ctc.sendrecv({
    args: [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393, v18777],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:516:24:decimal', stdlib.UInt_max, '0'), v18352], [v18668, v18294], [stdlib.checkedBigNumberify('./index.rsh:516:30:decimal', stdlib.UInt_max, '0'), v18295]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
      
      switch (v19405[0]) {
        case 'Protocol_harvest0_14502': {
          const v19408 = v19405[1];
          
          break;
          }
        case 'Provider_deposit0_14502': {
          const v20529 = v19405[1];
          
          break;
          }
        case 'Provider_withdraw0_14502': {
          const v21650 = v19405[1];
          
          break;
          }
        case 'Trader_swapAForB0_14502': {
          const v22771 = v19405[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v22926 = v22771[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '0')];
          const v22932 = v18387.A;
          const v22933 = v18387.B;
          const v22934 = v18389.protoFee;
          const v22935 = v18389.totFee;
          const v22939 = stdlib.add(v22932, v22926);
          const v22943 = stdlib.muldiv(v22926, v22933, v22939);
          const v22944 = stdlib.cast(false, true, v22926);
          const v22945 = stdlib.cast(false, true, v22935);
          const v22946 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v22945);
          const v22947 = stdlib.mul256(v22944, v22946);
          const v22948 = stdlib.cast(false, true, v22939);
          const v22949 = stdlib.mul256(v22948, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v22950 = stdlib.add256(v22949, v22947);
          const v22951 = stdlib.cast(false, true, v22933);
          const v22952 = stdlib.mul256(v22947, v22951);
          const v22953 = stdlib.div256(v22952, v22950);
          const v22954 = stdlib.cast(true, false, v22953);
          const v22957 = stdlib.sub(v22943, v22954);
          const v22960 = stdlib.mul(v22934, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
          const v22961 = stdlib.div(v22960, v22935);
          const v22964 = stdlib.muldiv(v22957, v22961, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
          const v22966 = stdlib.muldiv(v22926, v22934, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
          const v22970 = stdlib.muldiv(v22966, v22933, v22939);
          const v22971 = stdlib.gt(v22970, v22964);
          const v22972 = [v22966, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v22973 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v22964];
          const v22974 = v22971 ? v22972 : v22973;
          const v22976 = v22974[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
          const v22977 = v22974[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
          const v22996 = stdlib.sub(v22933, v22954);
          const v23000 = stdlib.sub(v22939, v22976);
          const v23003 = stdlib.sub(v22996, v22977);
          ;
          ;
          sim_r.txns.push({
            amt: v22926,
            kind: 'to',
            tok: v18294
            });
          ;
          const v23646 = {
            A: v23000,
            B: v23003
            };
          const v23647 = v18388.A;
          const v23651 = stdlib.add(v23647, v22976);
          const v23652 = v18388.B;
          const v23656 = stdlib.add(v23652, v22977);
          const v23657 = {
            A: v23651,
            B: v23656
            };
          sim_r.txns.push({
            kind: 'from',
            to: v19404,
            tok: v18295
            });
          const v23708 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v22954
            };
          const v23709 = await txn1.getOutput('Trader_swapAForB', 'v23708', ctc10, v23708);
          
          const v23718 = {
            A: v22926,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v23720 = {
            A: v23000,
            B: v23003
            };
          null;
          const v29173 = v18386;
          const v29174 = v23646;
          const v29175 = v23657;
          const v29176 = v18389;
          const v29178 = v18393;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_14502': {
          const v23892 = v19405[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
  switch (v19405[0]) {
    case 'Protocol_harvest0_14502': {
      const v19408 = v19405[1];
      return;
      break;
      }
    case 'Provider_deposit0_14502': {
      const v20529 = v19405[1];
      return;
      break;
      }
    case 'Provider_withdraw0_14502': {
      const v21650 = v19405[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_14502': {
      const v22771 = v19405[1];
      undefined /* setApiDetails */;
      const v22926 = v22771[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '0')];
      const v22927 = v22771[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '1')];
      const v22930 = v18389.locked;
      const v22931 = v22930 ? false : true;
      stdlib.assert(v22931, {
        at: './index.rsh:474:14:application',
        fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v22932 = v18387.A;
      const v22933 = v18387.B;
      const v22934 = v18389.protoFee;
      const v22935 = v18389.totFee;
      const v22939 = stdlib.add(v22932, v22926);
      const v22943 = stdlib.muldiv(v22926, v22933, v22939);
      const v22944 = stdlib.cast(false, true, v22926);
      const v22945 = stdlib.cast(false, true, v22935);
      const v22946 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v22945);
      const v22947 = stdlib.mul256(v22944, v22946);
      const v22948 = stdlib.cast(false, true, v22939);
      const v22949 = stdlib.mul256(v22948, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v22950 = stdlib.add256(v22949, v22947);
      const v22951 = stdlib.cast(false, true, v22933);
      const v22952 = stdlib.mul256(v22947, v22951);
      const v22953 = stdlib.div256(v22952, v22950);
      const v22954 = stdlib.cast(true, false, v22953);
      const v22957 = stdlib.sub(v22943, v22954);
      const v22960 = stdlib.mul(v22934, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
      const v22961 = stdlib.div(v22960, v22935);
      const v22964 = stdlib.muldiv(v22957, v22961, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
      const v22966 = stdlib.muldiv(v22926, v22934, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
      const v22970 = stdlib.muldiv(v22966, v22933, v22939);
      const v22971 = stdlib.gt(v22970, v22964);
      const v22972 = [v22966, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v22973 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v22964];
      const v22974 = v22971 ? v22972 : v22973;
      const v22976 = v22974[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
      const v22977 = v22974[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
      const v22996 = stdlib.sub(v22933, v22954);
      const v23000 = stdlib.sub(v22939, v22976);
      const v23003 = stdlib.sub(v22996, v22977);
      const v23016 = stdlib.le(v22927, v22954);
      stdlib.assert(v23016, {
        at: './index.rsh:495:14:application',
        fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v23019 = stdlib.cast(false, true, v22932);
      const v23021 = stdlib.mul256(v23019, v22951);
      const v23022 = stdlib.cast(false, true, v23000);
      const v23023 = stdlib.cast(false, true, v23003);
      const v23024 = stdlib.mul256(v23022, v23023);
      const v23025 = stdlib.ge256(v23024, v23021);
      stdlib.assert(v23025, {
        at: './index.rsh:505:14:application',
        fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      ;
      ;
      ;
      ;
      const v23646 = {
        A: v23000,
        B: v23003
        };
      const v23647 = v18388.A;
      const v23651 = stdlib.add(v23647, v22976);
      const v23652 = v18388.B;
      const v23656 = stdlib.add(v23652, v22977);
      const v23657 = {
        A: v23651,
        B: v23656
        };
      ;
      const v23708 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v22954
        };
      const v23709 = await txn1.getOutput('Trader_swapAForB', 'v23708', ctc10, v23708);
      if (v16940) {
        stdlib.protect(ctc2, await interact.out(v22771, v23709), {
          at: './index.rsh:514:11:application',
          fs: ['at ./index.rsh:514:11:application call to [unknown function] (defined at: ./index.rsh:514:11:function exp)', 'at ./index.rsh:508:12:application call to "k" (defined at: ./index.rsh:516:38:function exp)', 'at ./index.rsh:516:42:application call to "c" (defined at: ./index.rsh:506:20:function exp)', 'at ./index.rsh:516:38:application call to [unknown function] (defined at: ./index.rsh:516:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v23718 = {
        A: v22926,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v23720 = {
        A: v23000,
        B: v23003
        };
      null;
      const v29173 = v18386;
      const v29174 = v23646;
      const v29175 = v23657;
      const v29176 = v18389;
      const v29178 = v18393;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_14502': {
      const v23892 = v19405[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_swapBForA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_swapBForA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_swapBForA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_14502: ctc9,
    Provider_deposit0_14502: ctc11,
    Provider_withdraw0_14502: ctc12,
    Trader_swapAForB0_14502: ctc8,
    Trader_swapBForA0_14502: ctc8
    });
  
  
  const [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v18781 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_14502" (defined at: ./index.rsh:518:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v18782 = v18781[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v18783 = v18781[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v18788 = v18389.locked;
  const v18789 = v18788 ? false : true;
  stdlib.assert(v18789, {
    at: './index.rsh:474:14:application',
    fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_14502" (defined at: ./index.rsh:518:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v18790 = v18387.A;
  const v18791 = v18387.B;
  const v18792 = v18389.protoFee;
  const v18793 = v18389.totFee;
  const v18797 = stdlib.add(v18791, v18782);
  const v18801 = stdlib.muldiv(v18782, v18790, v18797);
  const v18802 = stdlib.cast(false, true, v18782);
  const v18803 = stdlib.cast(false, true, v18793);
  const v18804 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18803);
  const v18805 = stdlib.mul256(v18802, v18804);
  const v18806 = stdlib.cast(false, true, v18797);
  const v18807 = stdlib.mul256(v18806, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v18808 = stdlib.add256(v18807, v18805);
  const v18809 = stdlib.cast(false, true, v18790);
  const v18810 = stdlib.mul256(v18805, v18809);
  const v18811 = stdlib.div256(v18810, v18808);
  const v18812 = stdlib.cast(true, false, v18811);
  const v18815 = stdlib.sub(v18801, v18812);
  const v18818 = stdlib.mul(v18792, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
  const v18819 = stdlib.div(v18818, v18793);
  const v18822 = stdlib.muldiv(v18815, v18819, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
  const v18824 = stdlib.muldiv(v18782, v18792, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
  const v18828 = stdlib.muldiv(v18824, v18790, v18797);
  const v18829 = stdlib.gt(v18828, v18822);
  const v18830 = [v18824, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v18831 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18822];
  const v18832 = v18829 ? v18830 : v18831;
  const v18834 = v18832[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
  const v18835 = v18832[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
  const v18852 = stdlib.sub(v18790, v18812);
  const v18858 = stdlib.sub(v18852, v18835);
  const v18861 = stdlib.sub(v18797, v18834);
  const v18874 = stdlib.le(v18783, v18812);
  stdlib.assert(v18874, {
    at: './index.rsh:495:14:application',
    fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_14502" (defined at: ./index.rsh:518:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v18879 = stdlib.cast(false, true, v18791);
  const v18880 = stdlib.mul256(v18809, v18879);
  const v18881 = stdlib.cast(false, true, v18858);
  const v18882 = stdlib.cast(false, true, v18861);
  const v18883 = stdlib.mul256(v18881, v18882);
  const v18884 = stdlib.ge256(v18883, v18880);
  stdlib.assert(v18884, {
    at: './index.rsh:505:14:application',
    fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_14502" (defined at: ./index.rsh:518:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v18892 = ['Trader_swapBForA0_14502', v18781];
  
  const txn1 = await (ctc.sendrecv({
    args: [v18293, v18294, v18295, v18324, v18352, v18383, v18386, v18387, v18388, v18389, v18393, v18892],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:520:24:decimal', stdlib.UInt_max, '0'), v18352], [stdlib.checkedBigNumberify('./index.rsh:520:27:decimal', stdlib.UInt_max, '0'), v18294], [v18782, v18295]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
      
      switch (v19405[0]) {
        case 'Protocol_harvest0_14502': {
          const v19408 = v19405[1];
          
          break;
          }
        case 'Provider_deposit0_14502': {
          const v20529 = v19405[1];
          
          break;
          }
        case 'Provider_withdraw0_14502': {
          const v21650 = v19405[1];
          
          break;
          }
        case 'Trader_swapAForB0_14502': {
          const v22771 = v19405[1];
          
          break;
          }
        case 'Trader_swapBForA0_14502': {
          const v23892 = v19405[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v24164 = v23892[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '0')];
          const v24170 = v18387.A;
          const v24171 = v18387.B;
          const v24172 = v18389.protoFee;
          const v24173 = v18389.totFee;
          const v24177 = stdlib.add(v24171, v24164);
          const v24181 = stdlib.muldiv(v24164, v24170, v24177);
          const v24182 = stdlib.cast(false, true, v24164);
          const v24183 = stdlib.cast(false, true, v24173);
          const v24184 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v24183);
          const v24185 = stdlib.mul256(v24182, v24184);
          const v24186 = stdlib.cast(false, true, v24177);
          const v24187 = stdlib.mul256(v24186, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v24188 = stdlib.add256(v24187, v24185);
          const v24189 = stdlib.cast(false, true, v24170);
          const v24190 = stdlib.mul256(v24185, v24189);
          const v24191 = stdlib.div256(v24190, v24188);
          const v24192 = stdlib.cast(true, false, v24191);
          const v24195 = stdlib.sub(v24181, v24192);
          const v24198 = stdlib.mul(v24172, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
          const v24199 = stdlib.div(v24198, v24173);
          const v24202 = stdlib.muldiv(v24195, v24199, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
          const v24204 = stdlib.muldiv(v24164, v24172, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
          const v24208 = stdlib.muldiv(v24204, v24170, v24177);
          const v24209 = stdlib.gt(v24208, v24202);
          const v24210 = [v24204, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v24211 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24202];
          const v24212 = v24209 ? v24210 : v24211;
          const v24214 = v24212[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
          const v24215 = v24212[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
          const v24232 = stdlib.sub(v24170, v24192);
          const v24238 = stdlib.sub(v24232, v24215);
          const v24241 = stdlib.sub(v24177, v24214);
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v24164,
            kind: 'to',
            tok: v18295
            });
          const v24929 = {
            A: v24238,
            B: v24241
            };
          const v24930 = v18388.A;
          const v24934 = stdlib.add(v24930, v24215);
          const v24935 = v18388.B;
          const v24939 = stdlib.add(v24935, v24214);
          const v24940 = {
            A: v24934,
            B: v24939
            };
          sim_r.txns.push({
            kind: 'from',
            to: v19404,
            tok: v18294
            });
          const v24992 = {
            A: v24192,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v24993 = await txn1.getOutput('Trader_swapBForA', 'v24992', ctc10, v24992);
          
          const v25002 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v24164
            };
          const v25004 = {
            A: v24238,
            B: v24241
            };
          null;
          const v29263 = v18386;
          const v29264 = v24929;
          const v29265 = v24940;
          const v29266 = v18389;
          const v29268 = v18393;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v19405], secs: v19407, time: v19406, didSend: v16940, from: v19404 } = txn1;
  switch (v19405[0]) {
    case 'Protocol_harvest0_14502': {
      const v19408 = v19405[1];
      return;
      break;
      }
    case 'Provider_deposit0_14502': {
      const v20529 = v19405[1];
      return;
      break;
      }
    case 'Provider_withdraw0_14502': {
      const v21650 = v19405[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_14502': {
      const v22771 = v19405[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_14502': {
      const v23892 = v19405[1];
      undefined /* setApiDetails */;
      const v24164 = v23892[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '0')];
      const v24165 = v23892[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '1')];
      const v24168 = v18389.locked;
      const v24169 = v24168 ? false : true;
      stdlib.assert(v24169, {
        at: './index.rsh:474:14:application',
        fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v24170 = v18387.A;
      const v24171 = v18387.B;
      const v24172 = v18389.protoFee;
      const v24173 = v18389.totFee;
      const v24177 = stdlib.add(v24171, v24164);
      const v24181 = stdlib.muldiv(v24164, v24170, v24177);
      const v24182 = stdlib.cast(false, true, v24164);
      const v24183 = stdlib.cast(false, true, v24173);
      const v24184 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v24183);
      const v24185 = stdlib.mul256(v24182, v24184);
      const v24186 = stdlib.cast(false, true, v24177);
      const v24187 = stdlib.mul256(v24186, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v24188 = stdlib.add256(v24187, v24185);
      const v24189 = stdlib.cast(false, true, v24170);
      const v24190 = stdlib.mul256(v24185, v24189);
      const v24191 = stdlib.div256(v24190, v24188);
      const v24192 = stdlib.cast(true, false, v24191);
      const v24195 = stdlib.sub(v24181, v24192);
      const v24198 = stdlib.mul(v24172, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
      const v24199 = stdlib.div(v24198, v24173);
      const v24202 = stdlib.muldiv(v24195, v24199, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
      const v24204 = stdlib.muldiv(v24164, v24172, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
      const v24208 = stdlib.muldiv(v24204, v24170, v24177);
      const v24209 = stdlib.gt(v24208, v24202);
      const v24210 = [v24204, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v24211 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24202];
      const v24212 = v24209 ? v24210 : v24211;
      const v24214 = v24212[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
      const v24215 = v24212[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
      const v24232 = stdlib.sub(v24170, v24192);
      const v24238 = stdlib.sub(v24232, v24215);
      const v24241 = stdlib.sub(v24177, v24214);
      const v24254 = stdlib.le(v24165, v24192);
      stdlib.assert(v24254, {
        at: './index.rsh:495:14:application',
        fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v24259 = stdlib.cast(false, true, v24171);
      const v24260 = stdlib.mul256(v24189, v24259);
      const v24261 = stdlib.cast(false, true, v24238);
      const v24262 = stdlib.cast(false, true, v24241);
      const v24263 = stdlib.mul256(v24261, v24262);
      const v24264 = stdlib.ge256(v24263, v24260);
      stdlib.assert(v24264, {
        at: './index.rsh:505:14:application',
        fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      ;
      ;
      ;
      ;
      const v24929 = {
        A: v24238,
        B: v24241
        };
      const v24930 = v18388.A;
      const v24934 = stdlib.add(v24930, v24215);
      const v24935 = v18388.B;
      const v24939 = stdlib.add(v24935, v24214);
      const v24940 = {
        A: v24934,
        B: v24939
        };
      ;
      const v24992 = {
        A: v24192,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v24993 = await txn1.getOutput('Trader_swapBForA', 'v24992', ctc10, v24992);
      if (v16940) {
        stdlib.protect(ctc2, await interact.out(v23892, v24993), {
          at: './index.rsh:518:11:application',
          fs: ['at ./index.rsh:518:11:application call to [unknown function] (defined at: ./index.rsh:518:11:function exp)', 'at ./index.rsh:508:12:application call to "k" (defined at: ./index.rsh:520:38:function exp)', 'at ./index.rsh:520:42:application call to "c" (defined at: ./index.rsh:506:20:function exp)', 'at ./index.rsh:520:38:application call to [unknown function] (defined at: ./index.rsh:520:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v25002 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v24164
        };
      const v25004 = {
        A: v24238,
        B: v24241
        };
      null;
      const v29263 = v18386;
      const v29264 = v24929;
      const v29265 = v24940;
      const v29266 = v18389;
      const v29268 = v18393;
      return;
      
      break;
      }
    }
  
  
  };
export async function Protocol_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 2, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [2]');
  if (step == 2) {return _Protocol_delete2(ctcTop, interact);}
  };
export async function Protocol_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Protocol_harvest4(ctcTop, interact);}
  };
export async function Provider_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Provider_deposit4(ctcTop, interact);}
  };
export async function Provider_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Provider_withdraw4(ctcTop, interact);}
  };
export async function Trader_swapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Trader_swapAForB4(ctcTop, interact);}
  };
export async function Trader_swapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Trader_swapBForA4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Protocol_delete()byte[0]`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64))uint64`, `Provider_withdraw(uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`],
    pure: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`],
    sigs: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `Protocol_delete()byte[0]`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64))uint64`, `Provider_withdraw(uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`]
    },
  appApproval: `BiAVAAgYBAFkEAIDoI0GSZBOteDwwQeZ66OHCtmUrKAKuPeR5Qf89bu8Au6I6cQCIP///////////wEGJgUBAQEAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQ81lT6IjUAMRhBC9MqZEkiWzUBI1s1AjYaABdJQQGuIjUEIQQ1BkkhDAxAAVBJIQ0MQAEgSSEODEAA/yEOEkQ0AUklDEAAeSUSRClkKGRQSTUDSUpXURA1/1dhEDX+V3EQNf1XgTk1/DQDVzkINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXAAg0/FcICFA0/FcQCFA0/FcYIFA0/Fc4AVBQNP1XAAg0/VcICFBQNANXKAhQNANXMAlQNQdCCxchBxJEKWQoZFBJNQNJSlchEDX/VzEQNf5XQRA1/VdROTX8NANXGQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cICFA0A1cQCVA1B0IKnSENEkQ2GgE2GgJQNf+AAQM0/1AhCq9QQgCYSSEPDEAAGiEPEkQ2GgE2GgJQNf+AAQQ0/1AhCq9QQgB3IQwSRCpCBydJIRAMQAAvSSERDEAAFCEREkQ2GgE2GgJQNf8pNP9QQgBNIRASRDYaATX/KDT/UCEKr1BCADmB5PzqgQISRDYaATX/gAECNP9QgVGvUEIAHzYaAhc1BDYaAzYaARdJIQcMQAdASSEIDEAGuyEIEkQlNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSklXACA1/yESWzX+gShbNf1XMAk1/IE5WzX7V0EQNfpXURA1+VdhEDX4V3EQNfdXgTk19oG6AVs19Uk1BTX0gARHaEcfNPRQsDT0IlVJIQcMQAP5SSEIDEADEEklDEABhiUSRDT0VwEQNfM08yJbNfI09lc4ARcURDT4Ils18TT4I1s18DT2Ils17zT2IQZbNe408DTyCDXtJK808hZQKySvNO4WUKGICXCjiAlsNewkrzTxFlA16zTsNOujiAlaJK807RZQK6OICU807KCICUmiiAlFSUohBlsiEkQjWyISRCJbIhJEJFs16jTyNPEdNO2XNOoJNO8hBQs07godIQWXNek08jTvHSELlzXoI6806RZQNOgWI69QNOg08R007Zc06Q1NSTXnIls15jTnI1s15TTxNOoJNOUJNeQ07TTmCTXjNPMjWzTqDkQkrzTkFlAkrzTjFlCjiAi+NOskrzTwFlCjiAiyp0Q08jT9iAiJsSKyATTqshIlshAxALIUNP6yEbM06hYjr1A14oAIAAAAAAAAYaA04lCwNOI1BycEMQBQI6808hZQUDTiUDTkFjTjFlBQsDT/NP40/TT8NPs0+iI0+TTkFjTjFlA09yJbNOUIFjT3I1s05ggWUDT2MgY09UIHDUg09FcBEDXzNPMiWzXyNPZXOAEXFEQ0+CJbNfE0+CNbNfA09iJbNe809iEGWzXuNPE08gg17SSvNPIWUCskrzTuFlChiAfso4gH6DXsJK808BZQNes07DTro4gH1iSvNO0WUCujiAfLNOygiAfFoogHwUlKIQZbIhJEI1siEkQiWyISRCRbNeo08jTwHTTtlzTqCTTvIQULNO4KHSEFlzXpNPI07x0hC5c16COvNOkWUDToFiOvUDToNPAdNO2XNOkNTUk15yJbNeY05yNbNeU07TTmCTXkNPA06gk05Qk14zTzI1s06g5EJK805BZQJK804xZQo4gHOiSvNPEWUDTro4gHLqdENPI0/ogHBbEisgE06rISJbIQMQCyFDT9shGzI6806hZQNeKACAAAAAAAAFycNOJQsDTiNQcnBDEAUDTyFiOvUFA04lA05BY04xZQULA0/zT+NP00/DT7NPoiNPk05BY04xZQNPciWzTmCBY09yNbNOUIFlA09jIGNPVCBYlINPRXAQg18zTzFzXyNPI0+4gGezT5I1s18TT4Ils18DT4I1s17zTyNPAdNPGXNe408jTvHTTxlzXtNPkiWzTyCDXsNPE08gk16zTwNO4JNeo07zTtCTXpsSKyATTushIlshAxALIUNP6yEbOxIrIBNO2yEiWyEDEAshQ0/bIRszTuFjTtFlA16IAIAAAAAAAAV5006FCwNOg1B4AEHNSuXzEAUDTyFlA06FA06hY06RZQUDTsFjTrFlBQsDT/NP40/TT8NPs0+iI07BY06xZQNOoWNOkWUDT3NPYyBjT1QgSnSSEEDEABIEg09FcBEDXzNPM18jT2VzgBFxRENPIiWzXxNPIjWzXwNPkjWzXvNPE0/ogFeTTwNP2IBXI07yISQQAtJK808RZQJK808BZQo4gFe5aIBXdJSiEGWyISRCNbIhJEIlsiEkQkWzXuQgAiNPE07x00+CJblzXtNPA07x00+CNbl0k17DTtSTTsDE017jTxNPgiWwg17TTwNPgjWwg17DT5Ils07gk16zTvNO4INeqxIrIBNO6yEiWyEDEAshQ0+7IRs4AIAAAAAAAAUns07hZQsDTuFjUHgATeGyn1MQBQNPEWNPAWUFA07hZQNO0WNOwWUFA06xY06hZQULA0/zT+NP00/DT7NPoiNOsWNOoWUDTtFjTsFlA09zT2MgY09UIDgEg09FcBWTXzNPNXACA18jTzVyA5NfE0/zT2VxggEkQ08SJbNfA08SNbNe808SEGWzXuNPAhBQw07yEFDBA07jTvNPAIEhA07iEFDBA07iINEEQyCmAyCngJNPUJNe008Vc4ARc17DT3Ils16zT3I1s16rEisgE07bIIIQSyEDTysgezsSKyATTrshIlshA08rIUNP6yEbOxIrIBNOqyEiWyEDTyshQ0/bIRs4AIAAAAAAAATfI06xY06hZQNO0WUFCwNOsWNOoWUDTtFlA1B4AEVq11PDTwFjTvFlA07hZQNPFXGCBQNOwWUQcIUFCwNP80/jT9NPw0+zT6NOw0+SNbIhIQNPgiWyISNPgjWyISEBA0+TT4NPo08TIGNO009Qg07QlCAllIIQc0ARJENARJIhJMNAISEUQpZChkUEk1A4EZWzX/STUFNf6ABCU8t9c0/lCwgAgAAAAAAABh07AqNQexIrIBIQiyEDT/siGzsSKyASKyEiWyEDIJshUyCrIUNAMjW7IRs7EisgEishIlshAyCbIVMgqyFDQDIluyEbNCAmsiEkQhCYgCvyI0ARJENARJIhJMNAISEURJNQVJSkkiWzX/I1s1/lcQIDX9VzAINfyBOFs1+4AEpmTiYTT/FlA0/hZQNP1QNPxQNPsWULAhEyELDUQ0/zT+E0QhCYgCaLEisgEishIlshAyCrIUNP+yEbMhCYgCULEisgEishIlshAyCrIUNP6yEbMoNP8WUDX6gAVhcHBJRDT7FlADNfgyCmAyCngJFjX3sSKyASEUshA0+7IYgARJWgposhoxGBayGjT6sho0/hayGrMyCmAyCngJNPcXCRa3AD5XBABQNfmACAAAAAAAAEeVNPlQsDT5STX4Ils19zT4Vwg5STX2Ils19TT2I1s19DT2IQZbNfM09SEFDDT0IQUMEDTzNPQ09QgSEDTzIQUMEDTzIg0QRCI09xJEIQmIAYyxIrIBIQiyECETsiIhFLIjNPyyJTT9siaBYK+yJzIDsigyCrIps7Q8NfKACAAAAAAAAEevNPIWULA08jXxIjXwIjXvNP8WNP4WUCM07wsjWBc17jTxNO4SNPBJTTXwNO8hBAhJNe8hBwxA/9c08BREIQavNe8xADT/NP40+jTxNO8igBD//////////wAAAAAAAAAANO9JNPYyBjT3QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM0+UEANDT0FjT1FlA09lA09xZQNPpQNPtQNPxQNP1QKUsBVwB/ZyhLAVd/C2dIIQc1ATIGNQJCAFo08zT0FlA09RZQNPZQNPcWUDT4UDT6UDT7UDT8UDT9UDT/FlApSwFXAH9nKEsBV39DZ0glNQEyBjUCQgAdMRmBBRJEsSKyASKyCCEEshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSEECDIEEkQxFhJEIQRDMRkiEkRC/90iNQEiNQJC/8E0AElKIQQINQA4BzIKEkQ4ECEEEkQ4CBJEiTQASUpJIQQINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJSRUhEkwJr0xQiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 194,
  unsupported: [],
  version: 10,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:363:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v18294",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v18295",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T12",
                "name": "v18296",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T14",
                "name": "v18297",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v18298",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v1",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v3",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v4",
        "type": "tuple"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "protoFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totFee",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "protoAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "locked",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "Harvest",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v3",
        "type": "tuple"
      }
    ],
    "name": "Swap",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v3",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v4",
        "type": "tuple"
      }
    ],
    "name": "Withdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v18294",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v18295",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T12",
                "name": "v18296",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T14",
                "name": "v18297",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v18298",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v25040",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "protoFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "lpFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "totFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "protoAddr",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "locked",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Protocol_harvest0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "A",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "B",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T0",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Provider_withdraw0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Trader_swapAForB0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Trader_swapBForA0_14502",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v19405",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "protoFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lpFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totFee",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "protoAddr",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "locked",
                "type": "bool"
              }
            ],
            "internalType": "struct T1",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v18325",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v18351",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v19954",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v21115",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v22429",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v23708",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v24992",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v25043",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Info",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "liquidityToken",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "lptBals",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "poolBals",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "protoFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lpFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totFee",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "protoAddr",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "locked",
                "type": "bool"
              }
            ],
            "internalType": "struct T1",
            "name": "protoInfo",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "protoBals",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "tokB",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T2",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "_Some",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "tokA",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Protocol_delete",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "protoFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totFee",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "protoAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "locked",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "_a1",
        "type": "tuple"
      }
    ],
    "name": "Protocol_harvest",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T25",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Provider_deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Provider_withdraw",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Trader_swapAForB",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Trader_swapBForA",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v25040",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "protoFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "lpFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "totFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "protoAddr",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "locked",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Protocol_harvest0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "A",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "B",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T0",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Provider_withdraw0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Trader_swapAForB0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Trader_swapBForA0_14502",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v19405",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005f6138038062005f61833981016040819052620000269162000ee4565b60008055436003556200003862000a2f565b6040805133815283516020808301919091528085015180516001600160a01b0390811684860152918101518216606080850191909152818501515160808086019190915290820151516001600160c01b03191660a085015201511660c082015290517f66095a5d4ca377fa5a0b722e6c172d5ca90f298b536389b9d6a157cb6c4a67a29181900360e00190a1620000d26001600862000763565b620001138260200151602001516001600160a01b03168360200151600001516001600160a01b031614620001085760016200010b565b60005b600962000763565b620001213415600a62000763565b8051600190526020820180515182516001600160a01b0390911660409091015251516000906200015290306200078e565b6200015e919062000ff7565b6101c082015260208083015101516000906200017b90306200078e565b62000187919062000ff7565b6102008201526200019a60004762000ff7565b6101a082015280516020808401510151604051600092633b02a71760e01b92620001cb923092919060240162001054565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b0316600084604051620002279190620010b9565b60006040518083038185875af1925050503d806000811462000266576040519150601f19603f3d011682016040523d82523d6000602084013e6200026b565b606091505b5090925090506200027f8282600d62000872565b506101c08401516020860151516200029890306200078e565b620002a4919062000ff7565b6101e08501819052620002ba9015600b62000763565b6102008401516020808701510151620002d490306200078e565b620002e0919062000ff7565b6102208501819052620002f69015600c62000763565b6101a084015162000308904762000ff7565b60208086015191909152815162000327919083018101908301620010d7565b6020808601805190910191909152516040808601829052517f9e3d053a86518cdcdba0943d46f1e08b1fa98da519c85cafabcc4fa1f1d87d45916200036c91620011a3565b60405180910390a1620004226064856040015160200151600001511062000395576000620003a6565b606485604001516020015160200151105b620003b3576000620003de565b60408501516020908101518051910151620003cf9190620011c7565b85604001516020015160400151145b620003eb576000620003fc565b606485604001516020015160400151105b620004095760006200041a565b600085604001516020015160400151115b600e62000763565b604084015151620004369015600f62000763565b606084018051600019905251600060209182018190526080860180518290528051830182905251604090810182905260a08701519190915286820151810151518151928301520160408051601f198184030181529082905260208781015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260808881015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a089015151602084015291016040516020818303038152906040526000196012604051620005219062000b11565b620005329695949392919062001210565b604051809103906000f0801580156200054f573d6000803e3d6000fd5b506001600160a01b031660c0850181905260e085018190526040517f4a4b31ccf038cbc9bd60faed8d060398a0c1672791b61c9d49e73201f0eca0bb9162000597916200127b565b60405180910390a16020858101805151610100870180516001600160a01b039283169052915183015191519116910152600061014085018190525b60028110156200065d578461010001518160028110620005f657620005f66200128f565b60200201516001600160a01b031661016086015261014085015162000639578461016001516001600160a01b03168560e001516001600160a01b03161462000640565b8461014001515b1515610140860152806200065481620012a5565b915050620005d2565b50610140840151151561012085018190526200068b906200068057600162000683565b60005b601062000763565b61018084018051600090819052905160200152620006a862000b1f565b8051339052602080870180515183516001600160a01b0391821690840152905182015183519082166040918201528751845160609081019190915260e08901518551931660809384015261018089018051865160a090810191909152858701805160009052838c01518151880152825181518601529151825190930192909252918901805190940151825190930192909252805143920191909152905151905160c001526200075781620008b8565b505050505050620014ad565b816200078a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000806000846001600160a01b031660006370a0823160e01b86604051602401620007ba91906200127b565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620007fa9190620010b9565b60006040518083038185875af1925050503d806000811462000839576040519150601f19603f3d011682016040523d82523d6000602084013e6200083e565b606091505b509092509050620008528282600662000872565b5080806020019051810190620008699190620012c3565b95945050505050565b6060831562000883575081620008b1565b825115620008945782518084602001fd5b60405163100960cb60e01b81526004810183905260240162000781565b9392505050565b602081015151156200097a57620008ce62000b48565b81516020908101516001600160a01b0390811683528351604090810151821684840152845160609081015182860152855160809081015190931681860152838601805185015184870152805183015160a087015280519091015160c0860152519091015160e0840152600260005543600155516200094f91839101620012ec565b604051602081830303815290604052600290805190602001906200097592919062000bad565b505050565b6200098462000c3c565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151831681850152845160609081015181860152855160809081015190941684860152855160a09081015190860152828601805184015160c080880191909152815184015160e088015281519092015161010087015280519094015161012086015292519092015161014084015260046000554360015590516200094f9183910162001384565b60405180610240016040528062000a4562000cc7565b815260200162000a5462000ce9565b815260200162000a6362000ce9565b815260200162000a7262000d05565b81526040805160608101825260008082526020828101829052928201529101908152604080516020818101909252600081529101908152600060208201819052604082015260600162000ac462000d1f565b815260006020820181905260408201819052606082015260800162000ae862000d05565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6110298062004f3883390190565b604051806040016040528062000b3462000d3d565b815260200162000b4362000d7e565b905290565b60408051610100810182526000808252602082015290810162000b6a62000cc7565b81526000602082015260400162000b8062000d05565b815260200162000b8f62000d05565b815260200162000b9e62000d05565b815260200162000b4362000ddd565b82805462000bbb9062001470565b90600052602060002090601f01602090048101928262000bdf576000855562000c2a565b82601f1062000bfa57805160ff191683800117855562000c2a565b8280016001018555821562000c2a579182015b8281111562000c2a57825182559160200191906001019062000c0d565b5062000c3892915062000e17565b5090565b6040805161016081018252600080825260208201819052918101919091526060810162000c6862000cc7565b81526000602082015260400162000c7e62000d05565b815260200162000c8d62000d05565b815260200162000c9c62000d05565b815260200162000cab62000d05565b815260200162000cba62000ddd565b8152602001600081525090565b6040805160608101909152806000815260006020820181905260409091015290565b60405180604001604052806000815260200162000b4362000ddd565b604051806040016040528060008152602001600081525090565b60405180604001604052806002906020820280368337509192915050565b6040805160c081018252600080825260208201819052918101919091526060810162000d6862000cc7565b81526000602082015260400162000b4362000d05565b6040518060e0016040528060001515815260200162000d9c62000d05565b815260200162000dab62000d05565b815260200162000dba62000d05565b815260200162000dc962000ddd565b815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b5b8082111562000c38576000815560010162000e18565b604080519081016001600160401b038111828210171562000e5f57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000e5f57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b038111828210171562000e5f57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811462000edf57600080fd5b919050565b600081830360c081121562000ef857600080fd5b62000f0262000e2e565b8351815260a0601f198301121562000f1957600080fd5b62000f2362000e65565b62000f316020860162000ec7565b815262000f416040860162000ec7565b60208201526020605f198401121562000f5957600080fd5b62000f6362000e96565b6060860151815260408201526020607f198401121562000f8257600080fd5b62000f8c62000e96565b60808601519093506001600160c01b03198116811462000fab57600080fd5b83526060810183905262000fc260a0860162000ec7565b60808201526020820152949350505050565b6001600160a01b03169052565b634e487b7160e01b600052601160045260246000fd5b6000828210156200100c576200100c62000fe1565b500390565b8051600281106200103257634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062001075602084018662001011565b808416608084015250949350505050565b60005b83811015620010a357818101518382015260200162001089565b83811115620010b3576000848401525b50505050565b60008251620010cd81846020870162001086565b9190910192915050565b600060a08284031215620010ea57600080fd5b60405160a081016001600160401b03811182821017156200111b57634e487b7160e01b600052604160045260246000fd5b8060405250825181526020830151602082015260408301516040820152620011466060840162000ec7565b6060820152608083015180151581146200115f57600080fd5b60808201529392505050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260208083015160c0830191620011c0908401826200116b565b5092915050565b60008219821115620011dd57620011dd62000fe1565b500190565b60008151808452620011fc81602086016020860162001086565b601f01601f19169290920160200192915050565b60c0815260006200122560c0830189620011e2565b8281036020840152620012398189620011e2565b905082810360408401526200124f8188620011e2565b90508281036060840152620012658187620011e2565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620012bc57620012bc62000fe1565b5060010190565b600060208284031215620012d657600080fd5b5051919050565b80518252602090810151910152565b81516001600160a01b03908116825260208084015182169083015260408084015161022084019291620013229085018262001011565b5060608401511660a083015260808301516200134260c0840182620012dd565b5060a083015162001358610100840182620012dd565b5060c08301516200136e610140840182620012dd565b5060e0830151620011c06101808401826200116b565b60006102a0820190506200139a82845162000fd4565b6020830151620013ae602084018262000fd4565b506040830151620013c3604084018262000fd4565b506060830151620013d8606084018262001011565b506080830151620013ed60c084018262000fd4565b5060a08301516200140260e0840182620012dd565b5060c08301516101206200141981850183620012dd565b60e0850151915062001430610160850183620012dd565b6101008501519150620014486101a0850183620012dd565b84015190506200145d6101e08401826200116b565b5061014083015161028083015292915050565b600181811c908216806200148557607f821691505b60208210811415620014a757634e487b7160e01b600052602260045260246000fd5b50919050565b613a7b80620014bd6000396000f3fe6080604052600436106100985760003560e01c80630e36a72c146100a15780631e93b0f1146100ca57806332020fec146100e95780633e59bac4146101095780634012e02e1461011c5780634272dbc21461013e5780638323075714610151578063842463da14610166578063ab53f2c61461017e578063c8867ae9146101a1578063d02b6307146101b4578063dc8d714f146101c757005b3661009f57005b005b6100b46100af366004612f38565b6101da565b6040516100c19190612f7d565b60405180910390f35b3480156100d657600080fd5b506003545b6040519081526020016100c1565b6100fc6100f7366004612fa0565b610249565b6040516100c19190612fb9565b61009f610117366004612fc7565b6102a7565b34801561012857600080fd5b506101316102cb565b6040516100c19190613068565b6100db61014c366004613121565b61062e565b34801561015d57600080fd5b506001546100db565b61016e610685565b60405190151581526020016100c1565b34801561018a57600080fd5b506101936106bc565b6040516100c1929190613169565b6100fc6101af3660046131a3565b610759565b61009f6101c23660046131c5565b6107be565b6100fc6101d53660046131a3565b6107de565b6101e2612658565b6101ea612678565b6101f26126c7565b6101fa6126e1565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261023a8284610843565b50506020015190505b92915050565b610251612724565b610259612678565b6102616126c7565b6102696126e1565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261029b8284610843565b50506060015192915050565b6102af612678565b6102c76102c1368490038401846131d8565b82611f0a565b5050565b6102d361273e565b60026000541415610475576000600280546102ed9061325d565b80601f01602080910402602001604051908101604052809291908181526020018280546103199061325d565b80156103665780601f1061033b57610100808354040283529160200191610366565b820191906000526020600020905b81548152906001019060200180831161034957829003601f168201915b505050505080602001905181019061037e91906133ab565b905061038861279c565b608080830180515183515251602090810151835182015260a08085018051518386018051919091529051830151815184015260e0860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935188015183519015159089015260c0808b01805151838c01805191909152905189015181518a0152828c01518b8b0180519188169091529a518b518a015295518a5184015292518951909101529251875190960195909552928601518551931692909101919091529092015181519092019190915251919050565b6004600054141561061f5760006002805461048f9061325d565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb9061325d565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b50505050508060200190518101906105209190613457565b905061052a61279c565b60c080830180515183515251602090810151835182015260e0840180515182850180519190915290518201518151830152610120850180515160408087018051929092528251850151825186015282518101518251820152825160609081015183516001600160a01b039182169083015293516080908101518451901515908201526101008a01805151838b0180519190915290518801518151890152818b0151828b01805191881690915299518a519098019790975294518851830152915187518301529351865190930192909252918501518451921660a092909201919091529092015181519092019190915251919050565b61062b600060076120a1565b90565b6000610638612678565b6106406126c7565b6106486126e1565b6040805160208082018352878252838301919091526001835281518082019092528282528301526106798284610843565b50506040015192915050565b600061068f612678565b6106976127e3565b60408051602080820190925260008152908201526106b58183611f0a565b5051919050565b6000606060005460028080546106d19061325d565b80601f01602080910402602001604051908101604052809291908181526020018280546106fd9061325d565b801561074a5780601f1061071f5761010080835404028352916020019161074a565b820191906000526020600020905b81548152906001019060200180831161072d57829003601f168201915b50505050509050915091509091565b610761612724565b610769612678565b6107716126c7565b6107796126e1565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107b18284610843565b5050608001519392505050565b6107c6612678565b6102c76107d8368490038401846135c8565b82610843565b6107e6612724565b6107ee612678565b6107f66126c7565b6107fe6126e1565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526108368284610843565b505060a001519392505050565b61085360046000541460316120a1565b815161086e90158061086757508251600154145b60326120a1565b6000808055600280546108809061325d565b80601f01602080910402602001604051908101604052809291908181526020018280546108ac9061325d565b80156108f95780601f106108ce576101008083540402835291602001916108f9565b820191906000526020600020905b8154815290600101906020018083116108dc57829003601f168201915b50505050508060200190518101906109119190613457565b905061091b61280d565b7f0c36ecdcbe3fc67e26de932e0ef4b0434fa375ec7e902fe67403914b10d86be1338560405161094c92919061369b565b60405180910390a1600060208501515151600481111561096e5761096e61301e565b1415610d5e57602080850151510151815261098b341560146120a1565b6109a561099e33846080015160006120c7565b60156120a1565b6109bf6109b833846020015160006120c7565b60166120a1565b6109d96109d233846040015160006120c7565b60176120a1565b610a05826101200151606001516001600160a01b031683600001516001600160a01b03161460186120a1565b80516020015151610a9590606411610a1e576000610a2f565b606482600001516020015160200151105b610a3a576000610a5d565b81516020908101518051910151610a519190613761565b82516020015160400151145b610a68576000610a76565b815160200151604001516064115b610a81576000610a8e565b8151602001516040015115155b60196120a1565b61014082015147908110610ab857610140830151610ab39082613779565b610abb565b60005b602083018190528251516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610afa573d6000803e3d6000fd5b50602083015182515161010085015151610b159291906120df565b604083015182515161010085015160200151610b329291906120df565b6101008301805151604080850180519290925291516020908101518251820152905160608501805191909152818501518151909201919091525190517f6c2a1bdff59da173274ead0f0123581c29d795ee236d8ebdd6490252b5d42e4991610b9991612f7d565b60405180910390a160608083015160208087019190915283518101515160808086018051929092528551830151830151825184015285518301516040908101518351820152865184015185015183516001600160a01b0390911695019490945285519092015182015181519015159201919091525190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c3b91613790565b60405180910390a1610c4b612a94565b835181516001600160a01b0391821690526020808601518351908316908201526040808701518451908416910152606080870151845190910152608080870151845193169281019290925260a080870151845190910152845101510151610cb3576000610cbe565b60c084015160200151155b610cc9576000610ce6565b60e08401515115610cdb576000610ce6565b60e084015160200151155b6020808301805192151590925260c0860151825182015260e086015182516040015260a0808701518351606001528551820151835160800152915143920191909152830151610140850151610d3b9082613761565b610d459190613779565b602082015160c00152610d57816120f3565b5050611f04565b6001602085015151516004811115610d7857610d7861301e565b141561115c576020840151516040015160a082015261012082015160800151610db090610da6576001610da9565b60005b601a6120a1565b610dbc3415601b6120a1565b610dd6610dcf33846080015160006120c7565b601c6120a1565b610dfb610df43384602001518460a0015160000151600001516120c7565b601d6120a1565b610e20610e193384604001518460a0015160000151602001516120c7565b601e6120a1565b60c082015160200151610e565760a08101515160208101519051610e4c91610e479161379e565b61225d565b60c0820152610ee5565b60e08201515160c08301516020015160a08301515151610e76919061379e565b610e8091906137bd565b8160e00181815250508160e00151602001518260c00151602001518260a001516000015160200151610eb2919061379e565b610ebc91906137bd565b610100820181905260e082015110610ed957806101000151610edf565b8060e001515b60c08201525b60e08201515160a08201515151610efc9190613761565b61012082015260e082015160209081015160a08301515190910151610f219190613761565b61014082019081526101208201516101608301805191909152905190516020015260c0808201519083015151610f579190613779565b61018082015260c0808201519083015160200151610f759190613761565b6101a082019081526101808201516101c083018051919091529051905160200152608082015160c0820151610fac919033906120df565b7fe7633952106679237087108748a1bc8bb03ffd69ff8f20f6b2850b052e43e91d8160c00151604051610fe191815260200190565b60405180910390a160c08101805160408086019190915260a08301805151516101e0850180519190915290515160209081015182518201526101208501516102008601805191909152610140860151815183015261018086015161022087018051919091526101a0870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb94611090943394919391926137df565b60405180910390a16110a0612a94565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186518201528386018051600090526101c0880151815190950194909452610160870151845190930192909252610100870151835190910152610120860151825190930192909252805143920191909152610140840151905160c00152611156816120f3565b50611f04565b60026020850151515160048111156111765761117661301e565b14156114d857602084015151606001516102408201526111983415601f6120a1565b6111ba6111b3338460800151846102400151600001516120c7565b60206120a1565b6111d46111cd33846020015160006120c7565b60216120a1565b6111ee6111e733846040015160006120c7565b60226120a1565b60c08201516020015160e0830151516102408301515161120e919061379e565b61121891906137bd565b61026082015260c082015160209081015160e08401519091015161024083015151611243919061379e565b61124d91906137bd565b6102808201526102408101515160c08301515161126a9190613761565b6102a08201526102408101515160c08301516020015161128a9190613779565b6102c082019081526102a08201516102e08301805191909152905190516020015261026081015160e0830151516112c19190613779565b61030082015261028081015160e0830151602001516112e09190613779565b610320820190815261030082015161034083018051919091529051905160209081019190915282015161026082015161131b919033906120df565b61132f8260400151338361028001516120df565b6102608101516103608201805191909152610280820151815160200152516040517f64171e1b31d75357ae6aba8e7883869df74c92bc137b0d4eba5695338d3e339c9161137b91612fb9565b60405180910390a1610360810180516060850152610300820151610380830180519190915261032083015181516020908101919091526102a08401516103a085018051919091526102c0850151815190920191909152610240840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef855946114129433949193909261381d565b60405180910390a1611422612a94565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186518201528386018051600090526102e0880151815190950194909452610340870151845190930192909252610100870151835190910152610120860151825190930192909252805143920191909152610140840151905160c00152611156816120f3565b60036020850151515160048111156114f2576114f261301e565b14156119ef576020840151516080908101516103c0830152610120830151015161152b90611521576001611524565b60005b60236120a1565b6103c08101515160e0830151516115429190613761565b6103e08201526101208201516040015161155e90612710613779565b6103c08201515161156f919061379e565b610400820181905260e0830151602001516104208301526103e0820151611599906127109061379e565b6115a39190613761565b8161042001518261040001516115b9919061379e565b6115c391906137bd565b61044082015261012082015160408101519051606491906115e590839061379e565b6115ef91906137bd565b6104408301516103e084015160e0860151602001516103c086015151611615919061379e565b61161f91906137bd565b6116299190613779565b611633919061379e565b61163d91906137bd565b610460820152610120820151516103c0820151516127109161165e9161379e565b61166891906137bd565b61048082018181526104a083018051929092529051600060209182018190526104c08401805191909152610460840180519151830191909152516103e084015160e086015190920151925190926116be9161379e565b6116c891906137bd565b116116d857806104c001516116df565b806104a001515b6104e08201819052516103e08201516116f89190613779565b81610500018181525050806104e00151602001518161044001518360e00151602001516117259190613779565b61172f9190613779565b6105208201526104408101516103c08201516020015161175291101560246120a1565b61042081015160e08301515161178a9161176b9161379e565b826105200151836105000151611781919061379e565b101560256120a1565b611796341560266120a1565b6117b06117a933846080015160006120c7565b60276120a1565b6117d26117cb338460200151846103c00151600001516120c7565b60286120a1565b6117ec6117e533846040015160006120c7565b60296120a1565b61050081015161054082018051919091526105208201519051602001526104e081015151610100830151516118219190613761565b610560820151526104e0810151602090810151610100840151909101516118489190613761565b610560820151602001526040820151610440820151611869919033906120df565b6105808101805160009052610440820151815160200152516040517f9221b3de2c21b755d01a988d07f552184ead6a63c7b6b327fcb3c46f51e0e760916118af91612fb9565b60405180910390a16105808101805160808501526103c0820151516105a08301805191909152805160006020918201526105008401516105c08501805191909152610520850151815190920191909152905191519051604051600080516020613a2683398151915293611928933393919290919061384f565b60405180910390a1611938612a94565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a080880151865182015283860180516000905260c0808a015182519096019590955261054088015181519094019390935261056087015183519092019190915261012087015182519094019390935280514393019290925261014085015191510152611156816120f3565b6004602085015151516004811115611a0957611a0961301e565b1415611f045760208401515160a001516105e082015261012082015160800151611a4290611a38576001611a3b565b60005b602a6120a1565b6105e08101515160e083015160200151611a5c9190613761565b61060082015261012082015160400151611a7890612710613779565b6105e082015151611a89919061379e565b610620820181905260e083015151610640830152610600820151611ab0906127109061379e565b611aba9190613761565b816106400151826106200151611ad0919061379e565b611ada91906137bd565b6106608201526101208201516040810151905160649190611afc90839061379e565b611b0691906137bd565b61066083015161060084015160e0860151516105e086015151611b29919061379e565b611b3391906137bd565b611b3d9190613779565b611b47919061379e565b611b5191906137bd565b610680820152610120820151516105e08201515161271091611b729161379e565b611b7c91906137bd565b6106a082018181526106c083018051929092529051600060209182018190526106e08401805191909152610680840180519151909201525161060083015160e085015151925191929091611bd0919061379e565b611bda91906137bd565b11611bea57806106e00151611bf1565b806106c001515b61070082018190526020015161066082015160e084015151611c139190613779565b611c1d9190613779565b61072082015261070081015151610600820151611c3a9190613779565b6107408201526106608101516105e082015160200151611c5d911015602b6120a1565b611c988260e0015160200151826106400151611c79919061379e565b826107400151836107200151611c8f919061379e565b1015602c6120a1565b611ca43415602d6120a1565b611cbe611cb733846080015160006120c7565b602e6120a1565b611cd8611cd133846020015160006120c7565b602f6120a1565b611cfa611cf3338460400151846105e00151600001516120c7565b60306120a1565b61072081015161076082018051919091526107408201519051602090810191909152610700820151015161010083015151611d359190613761565b610780820151526107008101515161010083015160200151611d579190613761565b8161078001516020018181525050611d798260200151338361066001516120df565b6106608101516107a0820180519190915280516000602090910152516040517f55a1cff276441524d2726959431cc6863f0f66b6fb5dd9a68416723c9e96037391611dc391612fb9565b60405180910390a16107a08101805160a08501526107c082018051600090526105e08301515181516020908101919091526107208401516107e08501805191909152610740850151815190920191909152905191519051604051600080516020613a2683398151915293611e3d933393919290919061384f565b60405180910390a1611e4d612a94565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a080880151865182015283860180516000905260c0808a015182519096019590955261076088015181519094019390935261078087015183519092019190915261012087015182519094019390935280514393019290925261014085015191510152611156816120f3565b50505050565b611f1a60026000541460126120a1565b8151611f35901580611f2e57508251600154145b60136120a1565b600080805560028054611f479061325d565b80601f0160208091040260200160405190810160405280929190818152602001828054611f739061325d565b8015611fc05780601f10611f9557610100808354040283529160200191611fc0565b820191906000526020600020905b815481529060010190602001808311611fa357829003601f168201915b5050505050806020019051810190611fd891906133ab565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a1612030341560116120a1565b604051600081527f9364ea699f958c16aaf7567bf654993a43e45582885cbb78593752c275d1cb549060200160405180910390a1600082526060810151612079906000196122cd565b61208681606001516122e0565b6000808055600181905561209c90600290612ab4565b505050565b816102c75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006120d5838530856122f2565b90505b9392505050565b6120ea8383836123cc565b61209c57600080fd5b602081015151156121a957612106612aee565b81516020908101516001600160a01b0390811683528351604090810151821684840152845160609081015182860152855160809081015190931681860152838601805185015184870152805183015160a087015280519091015160c0860152519091015160e08401526002600055436001555161218591839101613886565b6040516020818303038152906040526002908051906020019061209c929190612b49565b6121b1612bcd565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151831681850152845160609081015181860152855160809081015190941684860152855160a09081015190860152828601805184015160c080880191909152815184015160e0880152815190920151610100870152805190940151610120860152925190920151610140840152600460005543600155905161218591839101613914565b50565b600060038211156122be57508060006122776002836137bd565b612282906001613761565b90505b818110156122b85790508060028161229d81866137bd565b6122a79190613761565b6122b191906137bd565b9050612285565b50919050565b81156122c8575060015b919050565b6122d7828261249d565b6102c757600080fd5b6122e981612578565b61225a57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612359916139ec565b60006040518083038185875af1925050503d8060008114612396576040519150601f19603f3d011682016040523d82523d6000602084013e61239b565b606091505b50915091506123ac8282600161261d565b50808060200190518101906123c19190613a08565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161242b916139ec565b60006040518083038185875af1925050503d8060008114612468576040519150601f19603f3d011682016040523d82523d6000602084013e61246d565b606091505b509150915061247e8282600261261d565b50808060200190518101906124939190613a08565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016124c991815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161250791906139ec565b60006040518083038185875af1925050503d8060008114612544576040519150601f19603f3d011682016040523d82523d6000602084013e612549565b606091505b509150915061255a8282600361261d565b508080602001905181019061256f9190613a08565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916125bf916139ec565b60006040518083038185875af1925050503d80600081146125fc576040519150601f19603f3d011682016040523d82523d6000602084013e612601565b606091505b50915091506126128282600461261d565b506001949350505050565b6060831561262c5750816120d8565b82511561263c5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016120be565b604051806040016040528061266b612724565b8152602001600081525090565b6040518060c00160405280600015158152602001612694612658565b8152602001600081526020016126a8612724565b81526020016126b5612724565b81526020016126c2612724565b905290565b6040518060400160405280600081526020016126c2612c3f565b6040805160c0810190915280600081526020016126fc612c52565b8152602001612709612c75565b81526020016126a86040518060200160405280600081525090565b604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b03168152602001612761612724565b815260200161276e612724565b815260200161277b612c88565b8152602001612788612724565b8152600060208201526040016126c2612cc2565b6040518060a001604052806127af612724565b81526020016127bc612724565b81526020016127c9612c88565b81526020016127d6612724565b81526020016126c261273e565b6040518060400160405280600081526020016126c260405180602001604052806000151581525090565b604051806108000160405280612821612c52565b815260200160008152602001612835612724565b8152602001612842612658565b815260200161284f612c88565b815260200161285c612c75565b8152602001600081526020016000815260200160008152602001600081526020016000815260200161288c612724565b815260200160008152602001600081526020016128a7612724565b81526020016128b4612724565b81526020016128c1612724565b81526020016128ce612724565b81526020016128e96040518060200160405280600081525090565b815260200160008152602001600081526020016000815260200160008152602001612912612724565b8152602001600081526020016000815260200161292d612724565b815260200161293a612724565b8152602001612947612724565b8152602001612954612724565b8152602001612961612724565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612998612724565b81526020016129a5612724565b81526020016129b2612724565b815260200160008152602001600081526020016129cd612724565b81526020016129da612724565b81526020016129e7612724565b81526020016129f4612724565b8152602001612a01612724565b8152602001612a0e612724565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612a45612724565b8152602001612a52612724565b8152602001612a5f612724565b81526020016000815260200160008152602001612a7a612724565b8152602001612a87612724565b81526020016126a8612724565b6040518060400160405280612aa7612ce4565b81526020016126c2612d21565b508054612ac09061325d565b6000825580601f10612ad0575050565b601f01602090049060005260206000209081019061225a9190612d78565b604080516101008101825260008082526020820152908101612b0e612cc2565b815260006020820152604001612b22612724565b8152602001612b2f612724565b8152602001612b3c612724565b81526020016126c2612c88565b828054612b559061325d565b90600052602060002090601f016020900481019282612b775760008555612bbd565b82601f10612b9057805160ff1916838001178555612bbd565b82800160010185558215612bbd579182015b82811115612bbd578251825591602001919060010190612ba2565b50612bc9929150612d78565b5090565b60408051610160810182526000808252602082018190529181019190915260608101612bf7612cc2565b815260006020820152604001612c0b612724565b8152602001612c18612724565b8152602001612c25612724565b8152602001612c32612724565b815260200161266b612c88565b60405180602001604052806126c26126e1565b604051806040016040528060006001600160a01b031681526020016126c2612c88565b60405180602001604052806126c2612724565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040805160608101909152806000815260006020820181905260409091015290565b6040805160c0810182526000808252602082018190529181019190915260608101612d0d612cc2565b8152600060208201526040016126c2612724565b6040518060e00160405280600015158152602001612d3d612724565b8152602001612d4a612724565b8152602001612d57612724565b8152602001612d64612c88565b815260200160008152602001600081525090565b5b80821115612bc95760008155600101612d79565b6001600160a01b038116811461225a57600080fd5b60405160a081016001600160401b0381118282101715612dd257634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715612dd257634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715612dd257634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b0381118282101715612dd257634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b0381118282101715612dd257634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612dd257634e487b7160e01b600052604160045260246000fd5b801515811461225a57600080fd5b600060a08284031215612eea57600080fd5b612ef2612da2565b90508135815260208201356020820152604082013560408201526060820135612f1a81612d8d565b60608201526080820135612f2d81612eca565b608082015292915050565b60008060c08385031215612f4b57600080fd5b8235612f5681612d8d565b9150612f658460208501612ed8565b90509250929050565b80518252602090810151910152565b6000606082019050612f90828451612f6e565b6020830151604083015292915050565b600060208284031215612fb257600080fd5b5035919050565b604081016102438284612f6e565b6000604082840312156122b857600080fd5b6001600160a01b03169052565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b8051600281106130465761304661301e565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b0390811682526020808401516102008401929161309090850182612f6e565b5060408401516130a36060850182612f6e565b5060608401516130b660a0850182612fe6565b5060808401516130ca610140850182612f6e565b5060a08401511661018083015260c08301516130ea6101a0840182613034565b5092915050565b60006040828403121561310357600080fd5b61310b612dd8565b9050813581526020820135602082015292915050565b60006040828403121561313357600080fd5b6120d883836130f1565b60005b83811015613158578181015183820152602001613140565b83811115611f045750506000910152565b828152604060208201526000825180604084015261318e81606085016020870161313d565b601f01601f1916919091016060019392505050565b600080604083850312156131b657600080fd5b50508035926020909101359150565b60006101e082840312156122b857600080fd5b600081830360408112156131eb57600080fd5b604080519081016001600160401b038111828210171561321b57634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561323457600080fd5b61323c612e08565b9150602084013561324c81612eca565b825260208101919091529392505050565b600181811c9082168061327157607f821691505b602082108114156122b857634e487b7160e01b600052602260045260246000fd5b80516122c881612d8d565b6000606082840312156132af57600080fd5b604051606081016001600160401b03811182821017156132df57634e487b7160e01b600052604160045260246000fd5b80604052508091508251600281106132f657600080fd5b8152602083015161330681612eca565b6020820152604083015161331981612d8d565b6040919091015292915050565b60006040828403121561333857600080fd5b613340612dd8565b9050815181526020820151602082015292915050565b600060a0828403121561336857600080fd5b613370612da2565b9050815181526020820151602082015260408201516040820152606082015161339881612d8d565b60608201526080820151612f2d81612eca565b600061022082840312156133be57600080fd5b6133c6612e38565b6133cf83613292565b81526133dd60208401613292565b60208201526133ef846040850161329d565b604082015261340060a08401613292565b60608201526134128460c08501613326565b6080820152613425846101008501613326565b60a0820152613438846101408501613326565b60c082015261344b846101808501613356565b60e08201529392505050565b60006102a0828403121561346a57600080fd5b613472612e69565b61347b83613292565b815261348960208401613292565b602082015261349a60408401613292565b60408201526134ac846060850161329d565b60608201526134bd60c08401613292565b60808201526134cf8460e08501613326565b60a08201526101206134e385828601613326565b60c08301526134f6856101608601613326565b60e0830152613509856101a08601613326565b61010083015261351d856101e08601613356565b90820152610280929092015161014083015250919050565b600060c0828403121561354757600080fd5b61354f612dd8565b9050813561355c81612d8d565b815261356b8360208401612ed8565b602082015292915050565b60006040828403121561358857600080fd5b613590612e08565b905061359c83836130f1565b815292915050565b6000602082840312156135b657600080fd5b6135be612e08565b9135825250919050565b60008183036101e08112156135dc57600080fd5b6135e4612dd8565b833581526101c0601f19830112156135fb57600080fd5b613603612e08565b915061360d612e9a565b60208501356005811061361f57600080fd5b815261362e8660408701613535565b6020820152613641866101008701613576565b60408201526136548661014087016135a4565b60608201526136678661016087016130f1565b608082015261367a866101a087016130f1565b60a0820152825260208101919091529392505050565b6102c7828251612f6e565b6001600160a01b03838116825282516020808401919091528301515180516102008401929190600581106136d1576136d161301e565b6040850152602081810151805190931660608601529190910151906136f96080850183612fe6565b6040810151915061370e610120850183613690565b6060810151516101608501526080810151915061372f610180850183612f6e565b60a0015190506137436101c0840182612f6e565b509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156137745761377461374b565b500190565b60008282101561378b5761378b61374b565b500390565b60a081016102438284612fe6565b60008160001904831182151516156137b8576137b861374b565b500290565b6000826137da57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b038616815261010081016137fd6020830187612f6e565b8460608301526138106080830185612f6e565b61249360c0830184612f6e565b6001600160a01b03861681526020810185905261010081016138426040830186612f6e565b6138106080830185612f6e565b6001600160a01b038516815260e0810161386c6020830186612f6e565b6138796060830185612f6e565b61256f60a0830184612f6e565b81516001600160a01b039081168252602080840151821690830152604080840151610220840192916138ba90850182613034565b5060608401511660a083015260808301516138d860c0840182612f6e565b5060a08301516138ec610100840182612f6e565b5060c0830151613900610140840182612f6e565b5060e08301516130ea610180840182612fe6565b60006102a082019050613928828451612fd9565b602083015161393a6020840182612fd9565b50604083015161394d6040840182612fd9565b5060608301516139606060840182613034565b50608083015161397360c0840182612fd9565b5060a083015161398660e0840182612f6e565b5060c083015161012061399b81850183612f6e565b60e085015191506139b0610160850183612f6e565b61010085015191506139c66101a0850183612f6e565b84015190506139d96101e0840182612fe6565b5061014083015161028083015292915050565b600082516139fe81846020870161313d565b9190910192915050565b600060208284031215613a1a57600080fd5b81516120d881612eca56fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a2646970667358221220c4aa7cc7500c03d59a729bb23f2348dd8ceda366905ec8af2b829f54a2f56a5364736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122018a2e2226986cc58299aa3f674bbc1bff11ad98f74d5ec3b68ec49e6e7f162c364736f6c634300080c0033`,
  BytecodeLen: 24417,
  Which: `o1`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:523:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:529:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:378:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Protocol_delete": Protocol_delete,
  "Protocol_harvest": Protocol_harvest,
  "Provider_deposit": Provider_deposit,
  "Provider_withdraw": Provider_withdraw,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA
  };
export const _APIs = {
  Protocol_delete: Protocol_delete,
  Protocol_harvest: Protocol_harvest,
  Provider: {
    deposit: Provider_deposit,
    withdraw: Provider_withdraw
    },
  Trader: {
    swapAForB: Trader_swapAForB,
    swapBForA: Trader_swapBForA
    }
  };
