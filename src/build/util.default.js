// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    fee: ctc0,
    lpFee: ctc0,
    totFee: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    addr: ctc2,
    fee: ctc0,
    lpFee: ctc0,
    totFee: ctc0
    });
  return {
    ERR_CHKADD_1: (() => {
      
      const v56 = 'add overflow                                                    ';
      
      return v56;})(),
    ERR_CHKMUL_1: (() => {
      
      const v57 = 'denom > 0                                                       ';
      
      return v57;})(),
    ERR_CHKMUL_2: (() => {
      
      const v58 = 'mul overflow                                                    ';
      
      return v58;})(),
    ERR_CHKSUB_1: (() => {
      
      const v59 = 'a >= b                                                          ';
      
      return v59;})(),
    ERR_DOAVG_1: (() => {
      
      const v60 = 'balA > 0                                                        ';
      
      return v60;})(),
    ERR_DOAVG_2: (() => {
      
      const v61 = 'balB > 0                                                        ';
      
      return v61;})(),
    ERR_DOAVG_3: (() => {
      
      const v62 = 'result <= poolBalance                                           ';
      
      return v62;})(),
    ERR_HARVESTER_ADDR1: (() => {
      
      const v63 = 'Thou art not the harvester                                      ';
      
      return v63;})(),
    ERR_VERIFY_SQRT_1: (() => {
      
      const v64 = 'minted > 0                                                      ';
      
      return v64;})(),
    ERR_VERIFY_SQRT_2: (() => {
      
      const v65 = 'muldiv(amtA, amtB, minted) >= minted                            ';
      
      return v65;})(),
    ERR_VERIFY_SQRT_3: (() => {
      
      const v66 = 'minted <= poolBalance                                           ';
      
      return v66;})(),
    NUM_OF_TOKENS: (() => {
      
      
      return stdlib.checkedBigNumberify('./util.rsh:51:30:decimal', stdlib.UInt_max, 2);})(),
    VERIFY_ARITH: (() => {
      
      
      return false;})(),
    chkAddView: ((_v67, _v68 ) => {
        const v67 = stdlib.protect(ctc0, _v67, null);
        const v68 = stdlib.protect(ctc0, _v68, null);
      
      const v72 = stdlib.sub(stdlib.UInt_max, v67);
      const v73 = stdlib.ge(v72, v68);
      stdlib.assert(v73, {
        at: './util.rsh:14:4:application',
        fs: ['at 18:54:application call to [unknown function] (defined at: ./util.rsh:12:57:function exp)', 'at <top level> call to "chkAddView" (defined at: <top level>)'],
        msg: 'add overflow                                                    ',
        who: 'Module'
        });
      const v74 = stdlib.add(v67, v68);
      
      return v74;}),
    chkMulView: ((_v75, _v76 ) => {
        const v75 = stdlib.protect(ctc0, _v75, null);
        const v76 = stdlib.protect(ctc0, _v76, null);
      
      const v80 = stdlib.gt(v76, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v80, {
        at: './util.rsh:27:4:application',
        fs: ['at 32:54:application call to [unknown function] (defined at: ./util.rsh:26:57:function exp)', 'at <top level> call to "chkMulView" (defined at: <top level>)'],
        msg: 'denom > 0                                                       ',
        who: 'Module'
        });
      const v81 = stdlib.div(stdlib.UInt_max, v76);
      const v82 = stdlib.le(v75, v81);
      stdlib.assert(v82, {
        at: './util.rsh:28:4:application',
        fs: ['at 32:54:application call to [unknown function] (defined at: ./util.rsh:26:57:function exp)', 'at <top level> call to "chkMulView" (defined at: <top level>)'],
        msg: 'mul overflow                                                    ',
        who: 'Module'
        });
      const v83 = stdlib.mul(v75, v76);
      
      return v83;}),
    doAvgView: ((_v84, _v85, _v86, _v87, _v88, _v89 ) => {
        const v84 = stdlib.protect(ctc0, _v84, null);
        const v85 = stdlib.protect(ctc0, _v85, null);
        const v86 = stdlib.protect(ctc0, _v86, null);
        const v87 = stdlib.protect(ctc0, _v87, null);
        const v88 = stdlib.protect(ctc0, _v88, null);
        const v89 = stdlib.protect(ctc0, _v89, null);
      
      const v91 = stdlib.gt(v85, stdlib.checkedBigNumberify('165:13:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v91, {
        at: '165:5:application',
        fs: ['at <top level> call to "doAvgView" (defined at: <top level>)'],
        msg: 'balA > 0                                                        ',
        who: 'Module'
        });
      const v92 = stdlib.gt(v87, stdlib.checkedBigNumberify('166:13:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v92, {
        at: '166:5:application',
        fs: ['at <top level> call to "doAvgView" (defined at: <top level>)'],
        msg: 'balB > 0                                                        ',
        who: 'Module'
        });
      const v94 = stdlib.muldiv(v84, v88, v85);
      const v96 = stdlib.muldiv(v86, v88, v87);
      const v100 = stdlib.lt(v94, v96);
      const v101 = v100 ? v94 : v96;
      const v102 = stdlib.le(v101, v89);
      stdlib.assert(v102, {
        at: '170:4:application',
        fs: ['at <top level> call to "doAvgView" (defined at: <top level>)'],
        msg: 'result <= poolBalance                                           ',
        who: 'Module'
        });
      
      return v101;}),
    getAmtOutView: ((_v103, _v104, _v105, _v106 ) => {
        const v103 = stdlib.protect(ctc0, _v103, null);
        const v104 = stdlib.protect(ctc0, _v104, null);
        const v105 = stdlib.protect(ctc0, _v105, null);
        const v106 = stdlib.protect(ctc1, _v106, null);
      
      const v114 = v106.fee;
      const v115 = v106.lpFee;
      const v119 = v106.totFee;
      const v120 = stdlib.add(v115, v114);
      const v121 = stdlib.eq(v119, v120);
      const v122 = stdlib.lt(v119, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
      const v123 = v121 ? v122 : false;
      const v124 = stdlib.gt(v119, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
      const v125 = v123 ? v124 : false;
      stdlib.assert(v125, {
        at: './util.rsh:96:4:application',
        fs: ['at 102:15:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at <top level> call to "getAmtOutView" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v127 = stdlib.sub(stdlib.checkedBigNumberify('104:15:decimal', stdlib.UInt_max, 10000), v119);
      const v129 = stdlib.gt(v127, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v129, {
        at: './util.rsh:27:4:application',
        fs: ['at 105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at <top level> call to "getAmtOutView" (defined at: <top level>)'],
        msg: 'denom > 0                                                       ',
        who: 'Module'
        });
      const v130 = stdlib.div(stdlib.UInt_max, v127);
      const v131 = stdlib.le(v103, v130);
      stdlib.assert(v131, {
        at: './util.rsh:28:4:application',
        fs: ['at 105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at <top level> call to "getAmtOutView" (defined at: <top level>)'],
        msg: 'mul overflow                                                    ',
        who: 'Module'
        });
      const v132 = stdlib.mul(v103, v127);
      const v134 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('106:43:decimal', stdlib.UInt_max, 10000));
      const v135 = stdlib.le(v104, v134);
      stdlib.assert(v135, {
        at: './util.rsh:28:4:application',
        fs: ['at 106:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at <top level> call to "getAmtOutView" (defined at: <top level>)'],
        msg: 'mul overflow                                                    ',
        who: 'Module'
        });
      const v136 = stdlib.mul(v104, stdlib.checkedBigNumberify('106:43:decimal', stdlib.UInt_max, 10000));
      const v138 = stdlib.sub(stdlib.UInt_max, v136);
      const v139 = stdlib.ge(v138, v132);
      stdlib.assert(v139, {
        at: './util.rsh:14:4:application',
        fs: ['at 107:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at <top level> call to "getAmtOutView" (defined at: <top level>)'],
        msg: 'add overflow                                                    ',
        who: 'Module'
        });
      const v140 = stdlib.add(v136, v132);
      const v141 = stdlib.muldiv(v132, v105, v140);
      
      return v141;}),
    getOutAndProtoFeeView: ((_v142, _v143, _v144, _v145 ) => {
        const v142 = stdlib.protect(ctc0, _v142, null);
        const v143 = stdlib.protect(ctc0, _v143, null);
        const v144 = stdlib.protect(ctc0, _v144, null);
        const v145 = stdlib.protect(ctc3, _v145, null);
      
      const v147 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('139:21:decimal', stdlib.UInt_max, 10000));
      stdlib.assert(v147, {
        at: '139:9:application',
        fs: ['at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v152 = v145.fee;
      const v153 = v145.lpFee;
      const v157 = v145.totFee;
      const v158 = stdlib.add(v153, v152);
      const v159 = stdlib.eq(v157, v158);
      const v160 = stdlib.lt(v157, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
      const v161 = v159 ? v160 : false;
      const v162 = stdlib.gt(v157, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
      const v163 = v161 ? v162 : false;
      stdlib.assert(v163, {
        at: './util.rsh:96:4:application',
        fs: ['at 140:20:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v176 = stdlib.mul(v152, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
      const v177 = stdlib.div(v176, v157);
      const v179 = stdlib.gt(v144, stdlib.checkedBigNumberify('./util.rsh:122:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v179, {
        at: './util.rsh:122:5:application',
        fs: ['at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v201 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v157);
      const v203 = stdlib.gt(v201, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v203, {
        at: './util.rsh:27:4:application',
        fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'denom > 0                                                       ',
        who: 'Module'
        });
      const v204 = stdlib.div(stdlib.UInt_max, v201);
      const v205 = stdlib.le(v142, v204);
      stdlib.assert(v205, {
        at: './util.rsh:28:4:application',
        fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'mul overflow                                                    ',
        who: 'Module'
        });
      const v206 = stdlib.mul(v142, v201);
      const v208 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
      const v209 = stdlib.le(v143, v208);
      stdlib.assert(v209, {
        at: './util.rsh:28:4:application',
        fs: ['at ./util.rsh:106:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'mul overflow                                                    ',
        who: 'Module'
        });
      const v210 = stdlib.mul(v143, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
      const v212 = stdlib.sub(stdlib.UInt_max, v210);
      const v213 = stdlib.ge(v212, v206);
      stdlib.assert(v213, {
        at: './util.rsh:14:4:application',
        fs: ['at ./util.rsh:107:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'add overflow                                                    ',
        who: 'Module'
        });
      const v214 = stdlib.add(v210, v206);
      const v215 = stdlib.muldiv(v206, v144, v214);
      const v216 = stdlib.gt(v215, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v216, {
        at: './util.rsh:124:4:application',
        fs: ['at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'amtOut > 0',
        who: 'Module'
        });
      const v221 = stdlib.sub(stdlib.UInt_max, v143);
      const v222 = stdlib.ge(v221, v142);
      stdlib.assert(v222, {
        at: './util.rsh:14:4:application',
        fs: ['at ./util.rsh:66:19:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'add overflow                                                    ',
        who: 'Module'
        });
      const v223 = stdlib.add(v143, v142);
      const v224 = stdlib.gt(v223, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v224, {
        at: './util.rsh:67:4:application',
        fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v225 = stdlib.muldiv(v142, v144, v223);
      const v227 = stdlib.ge(v225, v215);
      stdlib.assert(v227, {
        at: './util.rsh:40:4:application',
        fs: ['at ./util.rsh:126:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'a >= b                                                          ',
        who: 'Module'
        });
      const v228 = stdlib.sub(v225, v215);
      const v229 = stdlib.muldiv(v142, v152, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
      const v231 = stdlib.gt(v177, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v231, {
        at: './util.rsh:27:4:application',
        fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'denom > 0                                                       ',
        who: 'Module'
        });
      const v232 = stdlib.div(stdlib.UInt_max, v177);
      const v233 = stdlib.le(v228, v232);
      stdlib.assert(v233, {
        at: './util.rsh:28:4:application',
        fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'outFee',
        who: 'Module'
        });
      const v234 = stdlib.mul(v228, v177);
      const v235 = stdlib.div(v234, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
      const v236 = stdlib.le(v235, v228);
      stdlib.assert(v236, {
        at: './util.rsh:130:4:application',
        fs: ['at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'pFeeOut <= outFee',
        who: 'Module'
        });
      const v238 = stdlib.le(v229, v223);
      stdlib.assert(v238, {
        at: './util.rsh:131:8:application',
        fs: ['at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'pFeeIn <= reserveIn',
        who: 'Module'
        });
      const v239 = stdlib.le(v235, v144);
      stdlib.assert(v239, {
        at: './util.rsh:132:8:application',
        fs: ['at 142:36:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at <top level> call to "getOutAndProtoFeeView" (defined at: <top level>)'],
        msg: 'pFeeOut <= reserveOut',
        who: 'Module'
        });
      const v241 = stdlib.muldiv(v235, v143, v144);
      const v242 = stdlib.ge(v241, v229);
      const v243 = [v215, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v235];
      const v244 = [v215, v229, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v245 = v242 ? v243 : v244;
      
      return v245;}),
    initialFees: (() => {
      
      const v246 = {
        fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
        };
      
      return v246;})(),
    mintView: ((_v247, _v248, _v249 ) => {
        const v247 = stdlib.protect(ctc0, _v247, null);
        const v248 = stdlib.protect(ctc0, _v248, null);
        const v249 = stdlib.protect(ctc0, _v249, null);
      
      const v251 = stdlib.muldiv(v247, v249, v248);
      
      return v251;}),
    verifySqrtView: ((_v252, _v253, _v254, _v255 ) => {
        const v252 = stdlib.protect(ctc0, _v252, null);
        const v253 = stdlib.protect(ctc0, _v253, null);
        const v254 = stdlib.protect(ctc0, _v254, null);
        const v255 = stdlib.protect(ctc0, _v255, null);
      
      const v257 = stdlib.gt(v252, stdlib.checkedBigNumberify('187:15:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v257, {
        at: '187:5:application',
        fs: ['at <top level> call to "verifySqrtView" (defined at: <top level>)'],
        msg: 'minted > 0                                                      ',
        who: 'Module'
        });
      const v258 = stdlib.muldiv(v253, v254, v252);
      const v259 = stdlib.ge(v258, v252);
      stdlib.assert(v259, {
        at: '189:4:application',
        fs: ['at <top level> call to "verifySqrtView" (defined at: <top level>)'],
        msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
        who: 'Module'
        });
      const v260 = stdlib.le(v252, v255);
      stdlib.assert(v260, {
        at: '190:4:application',
        fs: ['at <top level> call to "verifySqrtView" (defined at: <top level>)'],
        msg: 'minted <= poolBalance                                           ',
        who: 'Module'
        });
      
      return v252;})
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
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
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEAeShkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARcAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "stateMutability": "payable",
    "type": "fallback"
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405234801561001057600080fd5b50610205806100206000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122010db35288e8ea53172b67d575dae5439971d580c1d8da4528a758fb7a19e222d64736f6c634300080c0033`,
  BytecodeLen: 549,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  };
export const _APIs = {
  };
