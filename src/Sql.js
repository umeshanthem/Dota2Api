var sqlLoaderInitData = 'LOAD DATA INFILE * APPEND INTO TABLE IDFCTN_CARD_MBR_DTL TRAILING NULLCOLS  (IDFCTN_CARD_UNIQ_ID TERMINATED BY "|",' +
    ' IDFCTN_CARD_EMAIL_CMPGN_IND TERMINATED BY "|",' +
    ' IDFCTN_CARD_CTGRY_CD TERMINATED BY "|",' +
    ' HC_ID TERMINATED BY "|", MBR_SQNC_NBR TERMINATED BY "|" , MBR_FRST_NM TERMINATED BY "|", MBR_MID_NM TERMINATED BY "|", MBR_LAST_NM TERMINATED BY "|", ' +
    ' MBR_FULL_NM TERMINATED BY "|", MBR_BRTH_DT TERMINATED BY "|", GRP_ID TERMINATED BY "|", SUBGRP_ID TERMINATED BY "|", PKG_CD TERMINATED BY "|",  ' +
    ' ALPH_PRFX_CD TERMINATED BY "|", SRC_SYS_LKUP_CD TERMINATED BY "|", SRC_SYS_LOB_LKUP_CD TERMINATED BY "|", MBR_IDFCTN_CARD_TYPE_NM  TERMINATED BY "|", MBR_RLTNSHP_CD TERMINATED BY "|", MBR_GNDR_CD TERMINATED BY "|",' +
    ' IDFCTN_CARD_DTL_CREATD_TMS EXPRESSION "current_timestamp(3)", IDFCTN_CARD_DTL_UPDTD_TMS EXPRESSION "current_timestamp(3)")' +
    '  INTO TABLE IDFCTN_CARD_INFO_DTL TRAILING NULLCOLS ' +
    ' (IDFCTN_CARD_UNIQ_ID TERMINATED BY "|", SRC_SYS_LKUP_CD TERMINATED BY "|", SRC_SYS_LOB_LKUP_CD TERMINATED BY "|", ' +
    ' IDFCTN_CARD_OUTBND_FILE_NM TERMINATED BY "|", IDFCTN_CARD_INBND_FILE_NM TERMINATED BY "|", IDFCTN_CARD_PRNT_SPRSN_IND TERMINATED BY "|", ' +
    ' IDFCTN_CARD_INFO_UPDTD_TMS EXPRESSION "current_timestamp(3)",IDFCTN_CARD_INFO_CREATD_TMS EXPRESSION "current_timestamp(3)",' +
    ' IDFCTN_CARD_INFO char(40000) TERMINATED BY "|",IDFCTN_CARD_KEY "IDFCTN_CARD_KEY.NEXTVAL") BEGINDATA ';


var sqlLoaderInitDataNascoMC = 'LOAD DATA INFILE * APPEND INTO TABLE IDFCTN_CARD_MBR_DTL WHEN tab = "IDFCTN_CARD_MBR_DTL" TRAILING NULLCOLS  (tab  FILLER CHAR(19), IDFCTN_CARD_UNIQ_ID TERMINATED BY "|",' +
	' IDFCTN_CARD_EMAIL_CMPGN_IND TERMINATED BY "|",' +
	' IDFCTN_CARD_CTGRY_CD TERMINATED BY "|",' +
    ' HC_ID TERMINATED BY "|", MBR_SQNC_NBR TERMINATED BY "|" , MBR_FRST_NM TERMINATED BY "|", MBR_MID_NM TERMINATED BY "|", MBR_LAST_NM TERMINATED BY "|", ' +
    ' MBR_FULL_NM TERMINATED BY "|", MBR_BRTH_DT DATE "MMDDYYYY" TERMINATED BY "|", GRP_ID TERMINATED BY "|", SUBGRP_ID TERMINATED BY "|", PKG_CD TERMINATED BY "|",  ' +
    ' ALPH_PRFX_CD TERMINATED BY "|", SRC_SYS_LKUP_CD TERMINATED BY "|", SRC_SYS_LOB_LKUP_CD TERMINATED BY "|", MBR_IDFCTN_CARD_TYPE_NM  TERMINATED BY "|", MBR_RLTNSHP_CD TERMINATED BY "|", MBR_GNDR_CD TERMINATED BY "|",' +
    ' IDFCTN_CARD_DTL_CREATD_TMS EXPRESSION "current_timestamp(3)", IDFCTN_CARD_DTL_UPDTD_TMS EXPRESSION "current_timestamp(3)")' +
    '  INTO TABLE IDFCTN_CARD_INFO_DTL WHEN tab = "IDFCTN_CARD_INFO_DTL" TRAILING NULLCOLS ' +
    ' (tab FILLER POSITION(1:20), IDFCTN_CARD_UNIQ_ID TERMINATED BY "|", SRC_SYS_LKUP_CD TERMINATED BY "|", SRC_SYS_LOB_LKUP_CD TERMINATED BY "|", ' +
    ' IDFCTN_CARD_OUTBND_FILE_NM TERMINATED BY "|", IDFCTN_CARD_INBND_FILE_NM TERMINATED BY "|", IDFCTN_CARD_PRNT_SPRSN_IND TERMINATED BY "|", ' +
    ' IDFCTN_CARD_INFO_UPDTD_TMS EXPRESSION "current_timestamp(3)",IDFCTN_CARD_INFO_CREATD_TMS EXPRESSION "current_timestamp(3)",' +
    ' IDFCTN_CARD_INFO char(40000) TERMINATED BY "|",IDFCTN_CARD_KEY "IDFCTN_CARD_KEY.NEXTVAL") BEGINDATA ';

// creaitng temp fake column name for StateCode in mbt table. Delete this and rename once we have real column names. fake column name is IDFCTN_CARD_STATE_CD.

var sqlLoaderDigitalPrefInitData = 'LOAD DATA INFILE * APPEND INTO TABLE IDFCTN_CARD_MBR_DTL WHEN tab = "IDFCTN_CARD_MBR_DTL" TRAILING NULLCOLS' +
    ' (tab  FILLER CHAR(19), IDFCTN_CARD_UNIQ_ID TERMINATED BY "|",' +
    ' IDFCTN_CARD_EMAIL_CMPGN_IND TERMINATED BY "|",' +
    ' IDFCTN_CARD_ST_CD TERMINATED BY "|",' +
    ' IDFCTN_CARD_CTGRY_CD TERMINATED BY "|",' +
    ' HC_ID TERMINATED BY "|", MBR_SQNC_NBR TERMINATED BY "|" , MBR_FRST_NM TERMINATED BY "|", MBR_MID_NM TERMINATED BY "|", MBR_LAST_NM TERMINATED BY "|", ' +
    ' MBR_FULL_NM TERMINATED BY "|", MBR_BRTH_DT DATE "MMDDYYYY" TERMINATED BY "|", GRP_ID TERMINATED BY "|", SUBGRP_ID TERMINATED BY "|", PKG_CD TERMINATED BY "|",  ' +
    ' ALPH_PRFX_CD TERMINATED BY "|", SRC_SYS_LKUP_CD TERMINATED BY "|", SRC_SYS_LOB_LKUP_CD TERMINATED BY "|", MBR_IDFCTN_CARD_TYPE_NM  TERMINATED BY "|", MBR_RLTNSHP_CD TERMINATED BY "|", MBR_GNDR_CD TERMINATED BY "|",' +
    ' IDFCTN_CARD_DTL_CREATD_TMS EXPRESSION "current_timestamp(3)", IDFCTN_CARD_DTL_UPDTD_TMS EXPRESSION "current_timestamp(3)")' +
    '  INTO TABLE IDFCTN_CARD_INFO_DTL WHEN tab = "IDFCTN_CARD_INFO_DTL" TRAILING NULLCOLS ' +
    ' (tab FILLER POSITION(1:20), IDFCTN_CARD_UNIQ_ID TERMINATED BY "|", SRC_SYS_LKUP_CD TERMINATED BY "|", SRC_SYS_LOB_LKUP_CD TERMINATED BY "|", ' +
    ' IDFCTN_CARD_OUTBND_FILE_NM TERMINATED BY "|", IDFCTN_CARD_INBND_FILE_NM TERMINATED BY "|", IDFCTN_CARD_PRNT_SPRSN_IND TERMINATED BY "|", ' +
    ' IDFCTN_CARD_INFO_UPDTD_TMS EXPRESSION "current_timestamp(3)",IDFCTN_CARD_INFO_CREATD_TMS EXPRESSION "current_timestamp(3)",' +
    ' IDFCTN_CARD_INFO char(40000) TERMINATED BY "|",IDFCTN_CARD_KEY "IDFCTN_CARD_KEY.NEXTVAL")' +
    '  INTO TABLE IDFCTN_CARD_DIGITAL_PRFRNC WHEN tab = "IDFCTN_CARD_DIGITAL_PRFRNC" TRAILING NULLCOLS' +
    ' (tab FILLER POSITION(1:26), SRC_SYS_LKUP_CD TERMINATED BY "|",' +
    ' SRC_SYS_LOB_LKUP_CD TERMINATED BY "|",HC_ID TERMINATED BY "|", IDFCTN_CARD_UNIQ_ID TERMINATED BY "|", ' +
    ' IDFCTN_CARD_EMAIL_CMPGN_IND TERMINATED BY "|",' +
    ' IDFCTN_CARD_CTGRY_CD TERMINATED BY "|",' +
    ' IDFCTN_CARD_PRNT_SPRSN_IND TERMINATED BY "|",' +
    ' NO_MORE_CARD_IND TERMINATED BY "|" , PRFRNC_SENT_VNDR_IND TERMINATED BY "|",  actcode boundfiller TERMINATED BY "|", MBR_RGSTRN_CD "to_char(IDFCTN_CARD_ACTV_CD_KEY.nextval)||:actcode" ,  ' +
    ' MBR_RGSTRN_CREATD_TMS EXPRESSION "current_timestamp(3)", MBR_RGSTRN_EXPRTN_TMS EXPRESSION "current_timestamp(3)" ,EMAIL_GNRTD_TMS EXPRESSION "current_timestamp(3)", ' +
    ' IDFCTN_CARD_DIGITAL_INBND_NM TERMINATED BY "|", IDFCTN_CARD_DIGITAL_OUTBND_NM TERMINATED BY "|",' +
    ' IDFCTN_CARD_PRFRNC_CREATD_TMS EXPRESSION "current_timestamp(3)", IDFCTN_CARD_PRFRNC_UPDTD_TMS EXPRESSION "current_timestamp(3)") BEGINDATA ';

var sqlLoaderAckInitData = 'LOAD DATA INFILE * APPEND INTO TABLE IDFCTN_CARD_AKNLDGMT TRAILING NULLCOLS' +
    ' (IDFCTN_CARD_INDICES_TXT POSITION (1) TERMINATED BY "|", ' +
    ' IDFCTN_CARD_UNIQ_ID TERMINATED BY "|",IDFCTN_CARD_TYPE_NM TERMINATED BY "|",IDFCTN_CARD_STTS_TXT TERMINATED BY "|", ' +
    ' IDFCTN_CARD_AKNLDGMT_FILE_NM TERMINATED BY "|",AKNLDGMT_CREATD_TMS "current_timestamp(3)",AKNLDGMT_UPDTD_TMS "current_timestamp(3)") ' +
    ' INTO TABLE IDFCTN_CARD_MTDTA TRAILING NULLCOLS' +
    ' (IDFCTN_CARD_INDICES_TXT TERMINATED BY "|", ' +
    ' CUST_CARE_PHONE_NBR TERMINATED BY "|", ' +
    ' MTDTA_INFO char(4000000) TERMINATED BY "|", MTDTA_CREATD_TMS "current_timestamp(3)", MTDTA_UPDTD_TMS "current_timestamp(3)")' +
    ' BEGINDATA';

exports.sqlLoaderInitData = sqlLoaderInitData;
exports.sqlLoaderInitDataNascoMC = sqlLoaderInitDataNascoMC;
exports.sqlLoaderAckInitData = sqlLoaderAckInitData;
exports.sqlLoaderDigitalPrefInitData = sqlLoaderDigitalPrefInitData;