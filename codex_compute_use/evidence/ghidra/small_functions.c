/* Targeted Ghidra decompilation; addresses are image-relative VAs. */

/* Target: 0x14000572d */
/* Name: FUN_14000572d
 * Entry: 14000572d
 * Size: 75 bytes
 */

void FUN_14000572d(undefined8 param_1,undefined8 *param_2)

{
  undefined8 local_8;
  
  local_8 = param_1;
  FUN_1400b2bd0(param_2,"AppApprovalRequired",0x13,0x14013c36b,7,&local_8,FUN_1400057ba);
  return;
}



/* Target: 0x14008ec73 */
/* Name: FUN_14008ec73
 * Entry: 14008ec73
 * Size: 80 bytes
 */

bool FUN_14008ec73(longlong param_1,longlong param_2,longlong param_3,ulonglong param_4)

{
  longlong lVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  lVar1 = param_2 * 0x18;
  do {
    lVar3 = lVar1;
    if (lVar3 == 0) break;
    uVar2 = FUN_14001149b(*(longlong *)(param_1 + 8),*(ulonglong *)(param_1 + 0x10),param_3,param_4)
    ;
    param_1 = param_1 + 0x18;
    lVar1 = lVar3 + -0x18;
  } while ((char)uVar2 == '\0');
  return lVar3 != 0;
}



/* Target: 0x140096ee5 */
/* Name: FUN_140096ee5
 * Entry: 140096ee5
 * Size: 1427 bytes
 */

longlong FUN_140096ee5(longlong param_1,undefined8 *param_2)

{
  char *pcVar1;
  longlong *plVar2;
  void *pvVar3;
  uint uVar4;
  code *pcVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  int iVar9;
  char cVar10;
  char cVar11;
  char cVar12;
  char cVar13;
  char cVar14;
  char cVar15;
  char cVar16;
  char cVar17;
  char cVar18;
  char cVar19;
  char cVar20;
  char cVar21;
  char cVar22;
  char cVar23;
  char cVar24;
  char cVar25;
  bool bVar26;
  int iVar27;
  DWORD DVar28;
  uint uVar29;
  longlong lVar30;
  undefined8 uVar31;
  ulonglong uVar32;
  longlong lVar33;
  undefined **ppuVar34;
  size_t sVar35;
  ulonglong uVar36;
  ulonglong uVar37;
  ulonglong uVar38;
  longlong lVar39;
  longlong *plVar40;
  size_t sVar41;
  size_t sVar42;
  void *pvVar43;
  ulonglong uVar44;
  byte bVar45;
  undefined1 auVar46 [16];
  undefined1 auVar47 [16];
  undefined1 unaff_XMM6_Ba;
  undefined1 unaff_XMM6_Bb;
  undefined1 unaff_XMM6_Bc;
  undefined1 unaff_XMM6_Bd;
  undefined1 unaff_XMM6_Be;
  undefined1 unaff_XMM6_Bf;
  undefined1 unaff_XMM6_Bg;
  undefined1 unaff_XMM6_Bh;
  undefined1 unaff_XMM6_Bi;
  undefined1 unaff_XMM6_Bj;
  undefined1 unaff_XMM6_Bk;
  undefined1 unaff_XMM6_Bl;
  undefined1 unaff_XMM6_Bm;
  undefined1 unaff_XMM6_Bn;
  undefined1 unaff_XMM6_Bo;
  undefined1 unaff_XMM6_Bp;
  undefined1 auVar48 [16];
  longlong local_140;
  longlong local_138;
  undefined2 local_130;
  longlong *local_128;
  ulonglong local_120;
  LPCWSTR local_118;
  ulonglong local_110;
  ulonglong local_108;
  LPCWSTR local_100;
  ulonglong local_f8;
  char local_f0;
  char local_ef;
  longlong local_e8;
  ulonglong local_e0;
  longlong *local_d8;
  longlong local_d0;
  undefined8 *local_c8;
  size_t local_c0;
  void *local_b8;
  size_t local_b0;
  longlong local_a8;
  longlong *local_a0;
  longlong local_98;
  undefined8 local_90;
  longlong local_88 [9];
  
  local_90 = 2;
  local_88[0] = param_1;
  local_88[1] = param_1 + 0x58;
  iVar6 = -(uint)(CONCAT13(unaff_XMM6_Bd,
                           CONCAT12(unaff_XMM6_Bc,CONCAT11(unaff_XMM6_Bb,unaff_XMM6_Ba))) ==
                 CONCAT13(unaff_XMM6_Bd,
                          CONCAT12(unaff_XMM6_Bc,CONCAT11(unaff_XMM6_Bb,unaff_XMM6_Ba))));
  iVar7 = -(uint)(CONCAT13(unaff_XMM6_Bh,
                           CONCAT12(unaff_XMM6_Bg,CONCAT11(unaff_XMM6_Bf,unaff_XMM6_Be))) ==
                 CONCAT13(unaff_XMM6_Bh,
                          CONCAT12(unaff_XMM6_Bg,CONCAT11(unaff_XMM6_Bf,unaff_XMM6_Be))));
  iVar8 = -(uint)(CONCAT13(unaff_XMM6_Bl,
                           CONCAT12(unaff_XMM6_Bk,CONCAT11(unaff_XMM6_Bj,unaff_XMM6_Bi))) ==
                 CONCAT13(unaff_XMM6_Bl,
                          CONCAT12(unaff_XMM6_Bk,CONCAT11(unaff_XMM6_Bj,unaff_XMM6_Bi))));
  iVar9 = -(uint)(CONCAT13(unaff_XMM6_Bp,
                           CONCAT12(unaff_XMM6_Bo,CONCAT11(unaff_XMM6_Bn,unaff_XMM6_Bm))) ==
                 CONCAT13(unaff_XMM6_Bp,
                          CONCAT12(unaff_XMM6_Bo,CONCAT11(unaff_XMM6_Bn,unaff_XMM6_Bm))));
  local_d0 = 0;
  local_c8 = param_2;
  do {
    do {
      if (local_d0 == 2) {
        return 0;
      }
      local_98 = local_d0 + 1;
      plVar2 = (longlong *)local_88[local_d0];
      lVar33 = *plVar2;
      local_d0 = local_98;
    } while (lVar33 == -3);
    local_128 = plVar2;
    if ((local_c8 != (undefined8 *)0x0) && (lVar33 != -2)) {
      pvVar3 = (void *)*local_c8;
      if (pvVar3 != (void *)0x0) {
        local_d8 = plVar2;
        if (lVar33 == -1) {
          local_d8 = (longlong *)0x0;
        }
        lVar33 = local_c8[4];
        local_a8 = local_c8[5] + lVar33;
        local_b0 = local_c8[1];
        local_b8 = (void *)local_c8[2];
        local_c0 = local_c8[3];
        local_e0 = 0;
        plVar2 = (longlong *)0x0;
        sVar41 = local_b0;
        sVar42 = local_c0;
        pvVar43 = local_b8;
LAB_14009700e:
        plVar40 = plVar2;
        if ((plVar40 != (longlong *)0x0) && (plVar40 != local_a0)) {
          plVar2 = plVar40 + 10;
          bVar26 = FUN_1400afc64((void *)plVar40[1],plVar40[2],pvVar3,sVar41);
          if (!bVar26) {
            sVar35 = plVar40[5];
            bVar26 = FUN_1400afc64((void *)plVar40[4],sVar35,pvVar43,sVar42);
            if (!bVar26) {
              lVar30 = FUN_14000e42f(plVar40 + 6);
              uVar31 = 0;
              if (lVar30 != 0) {
                if (lVar33 == 0) goto LAB_140097403;
                local_138 = sVar35 + lVar30;
                local_130 = 0;
                local_140 = lVar30;
                FUN_14005bf58(&local_120,&local_140);
                local_138 = local_a8;
                local_130 = 0;
                local_140 = lVar33;
                FUN_14005bf58(&local_108,&local_140);
                uVar32 = local_110;
                uVar44 = local_110 << 0x20;
                uVar36 = uVar44 + 0x200;
                if (0x7fffffff < local_110) {
                  uVar36 = 0x201;
                }
                FUN_140075e3d((uint *)&local_140,uVar36);
                uVar36 = local_f8;
                if ((char)local_140 != '\0') {
LAB_14009739f:
                  local_e8 = local_138;
                  FUN_140073033(local_108,local_100);
                  FUN_140073033(local_120,local_118);
                  return local_e8;
                }
                uVar38 = local_f8 << 0x20;
                uVar37 = uVar38 + 0x200;
                if (0x7fffffff < local_f8) {
                  uVar37 = 0x201;
                }
                FUN_140075e3d((uint *)&local_140,uVar37);
                if ((char)local_140 != '\0') goto LAB_14009739f;
                if (0x7fffffff < uVar32) {
                  uVar44 = 0x201;
                }
                if ((uVar44 & 1) != 0) {
                  ppuVar34 = &PTR_s_C__Users_runneradmin__cargo_regi_140136f28;
LAB_140097450:
                  local_140 = CONCAT71(local_140._1_7_,2);
                  FUN_1400b3d00("called `Result::unwrap()` on an `Err` valueC:\\Users\\runneradmin\\.cargo\\registry\\src\\index.crates.io-1949cf8c6b5b557f\\windows-strings-0.4.2\\src\\hstring_header.rs"
                                ,0x2b,&local_140,&DAT_1401332d0,ppuVar34);
                    /* WARNING: Does not return */
                  pcVar5 = (code *)invalidInstructionException();
                  (*pcVar5)();
                }
                if (0x7fffffff < uVar36) {
                  uVar38 = 0x201;
                }
                if ((uVar38 & 1) != 0) {
                  ppuVar34 = &PTR_s_C__Users_runneradmin__cargo_regi_140136f40;
                  goto LAB_140097450;
                }
                iVar27 = CompareStringOrdinal
                                   (local_118,(int)(uVar44 >> 0x20),local_100,(int)(uVar38 >> 0x20),
                                    1);
                if (iVar27 == 0) {
                  DVar28 = FUN_1401234f7();
                  local_140 = 0;
                  local_138 = CONCAT44(local_138._4_4_,DVar28);
                  FUN_14003fe18((longlong)&local_f0,&local_140,"failed to compare binary names",0x1e
                               );
                  cVar10 = local_f0;
                  FUN_140073033(local_108,local_100);
                  uVar31 = FUN_140073033(local_120,local_118);
                  if (cVar10 != '\0') {
                    return local_e8;
                  }
                }
                else {
                  local_ef = iVar27 == 2;
                  local_f0 = '\0';
                  FUN_140073033(local_108,local_100);
                  uVar31 = FUN_140073033(local_120,local_118);
                }
                sVar41 = local_b0;
                sVar42 = local_c0;
                pvVar43 = local_b8;
                if (local_ef == '\0') goto LAB_14009700e;
              }
              local_e0 = CONCAT71((int7)((ulonglong)uVar31 >> 8),1);
              plVar2 = plVar40 + 10;
              if ((char)plVar40[9] != '\0') goto LAB_140097403;
            }
          }
          goto LAB_14009700e;
        }
        if (local_d8 != (longlong *)0x0) {
          plVar2 = local_d8 + 1;
          local_a0 = (longlong *)*plVar2 + local_d8[2] * 10;
          local_d8 = (longlong *)0x0;
          plVar2 = (longlong *)*plVar2;
          goto LAB_14009700e;
        }
        bVar45 = *(byte *)((longlong)local_128 + 0x49);
        if ((local_e0 & 1) != 0) {
          bVar45 = 0;
        }
        goto LAB_140097297;
      }
      lVar33 = plVar2[3];
      if ((lVar33 != 0) && (plVar2[6] != 0)) {
        pvVar3 = (void *)local_c8[1];
        sVar41 = local_c8[2];
        uVar32 = FUN_14010a83d(plVar2[7],plVar2[8],(longlong)pvVar3,sVar41);
        uVar36 = plVar2[4];
        bVar45 = (byte)(uVar32 >> 0x39);
        auVar46 = ZEXT216(CONCAT11(bVar45,bVar45));
        auVar46 = pshuflw(auVar46,auVar46,0);
        lVar30 = 0;
        while( true ) {
          uVar32 = uVar32 & uVar36;
          pcVar1 = (char *)(lVar33 + uVar32);
          cVar10 = *pcVar1;
          cVar11 = pcVar1[1];
          cVar12 = pcVar1[2];
          cVar13 = pcVar1[3];
          cVar14 = pcVar1[4];
          cVar15 = pcVar1[5];
          cVar16 = pcVar1[6];
          cVar17 = pcVar1[7];
          cVar18 = pcVar1[8];
          cVar19 = pcVar1[9];
          cVar20 = pcVar1[10];
          cVar21 = pcVar1[0xb];
          cVar22 = pcVar1[0xc];
          cVar23 = pcVar1[0xd];
          cVar24 = pcVar1[0xe];
          cVar25 = pcVar1[0xf];
          auVar47[0] = -(cVar10 == auVar46[0]);
          auVar47[1] = -(cVar11 == auVar46[1]);
          auVar47[2] = -(cVar12 == auVar46[2]);
          auVar47[3] = -(cVar13 == auVar46[3]);
          auVar47[4] = -(cVar14 == auVar46[4]);
          auVar47[5] = -(cVar15 == auVar46[5]);
          auVar47[6] = -(cVar16 == auVar46[6]);
          auVar47[7] = -(cVar17 == auVar46[7]);
          auVar47[8] = -(cVar18 == auVar46[0]);
          auVar47[9] = -(cVar19 == auVar46[1]);
          auVar47[10] = -(cVar20 == auVar46[2]);
          auVar47[0xb] = -(cVar21 == auVar46[3]);
          auVar47[0xc] = -(cVar22 == auVar46[4]);
          auVar47[0xd] = -(cVar23 == auVar46[5]);
          auVar47[0xe] = -(cVar24 == auVar46[6]);
          auVar47[0xf] = -(cVar25 == auVar46[7]);
          for (uVar29 = (uint)(ushort)((ushort)(SUB161(auVar47 >> 7,0) & 1) |
                                       (ushort)(SUB161(auVar47 >> 0xf,0) & 1) << 1 |
                                       (ushort)(SUB161(auVar47 >> 0x17,0) & 1) << 2 |
                                       (ushort)(SUB161(auVar47 >> 0x1f,0) & 1) << 3 |
                                       (ushort)(SUB161(auVar47 >> 0x27,0) & 1) << 4 |
                                       (ushort)(SUB161(auVar47 >> 0x2f,0) & 1) << 5 |
                                       (ushort)(SUB161(auVar47 >> 0x37,0) & 1) << 6 |
                                       (ushort)(SUB161(auVar47 >> 0x3f,0) & 1) << 7 |
                                       (ushort)(SUB161(auVar47 >> 0x47,0) & 1) << 8 |
                                       (ushort)(SUB161(auVar47 >> 0x4f,0) & 1) << 9 |
                                       (ushort)(SUB161(auVar47 >> 0x57,0) & 1) << 10 |
                                       (ushort)(SUB161(auVar47 >> 0x5f,0) & 1) << 0xb |
                                       (ushort)(SUB161(auVar47 >> 0x67,0) & 1) << 0xc |
                                       (ushort)(SUB161(auVar47 >> 0x6f,0) & 1) << 0xd |
                                       (ushort)(SUB161(auVar47 >> 0x77,0) & 1) << 0xe |
                                      (ushort)(auVar47[0xf] >> 7) << 0xf); (short)uVar29 != 0;
              uVar29 = uVar29 - 1 & uVar29) {
            uVar4 = 0;
            if (uVar29 != 0) {
              for (; (uVar29 >> uVar4 & 1) == 0; uVar4 = uVar4 + 1) {
              }
            }
            lVar39 = lVar33 + (uVar4 + uVar32 & uVar36) * -0x20;
            uVar31 = FUN_14001e81f(pvVar3,sVar41,*(void **)(lVar39 + -0x18),
                                   *(size_t *)(lVar39 + -0x10));
            if ((char)uVar31 != '\0') {
              bVar45 = *(byte *)(lVar39 + -8);
              goto LAB_140097297;
            }
          }
          auVar48[0] = -(cVar10 == (char)iVar6);
          auVar48[1] = -(cVar11 == (char)((uint)iVar6 >> 8));
          auVar48[2] = -(cVar12 == (char)((uint)iVar6 >> 0x10));
          auVar48[3] = -(cVar13 == (char)((uint)iVar6 >> 0x18));
          auVar48[4] = -(cVar14 == (char)iVar7);
          auVar48[5] = -(cVar15 == (char)((uint)iVar7 >> 8));
          auVar48[6] = -(cVar16 == (char)((uint)iVar7 >> 0x10));
          auVar48[7] = -(cVar17 == (char)((uint)iVar7 >> 0x18));
          auVar48[8] = -(cVar18 == (char)iVar8);
          auVar48[9] = -(cVar19 == (char)((uint)iVar8 >> 8));
          auVar48[10] = -(cVar20 == (char)((uint)iVar8 >> 0x10));
          auVar48[0xb] = -(cVar21 == (char)((uint)iVar8 >> 0x18));
          auVar48[0xc] = -(cVar22 == (char)iVar9);
          auVar48[0xd] = -(cVar23 == (char)((uint)iVar9 >> 8));
          auVar48[0xe] = -(cVar24 == (char)((uint)iVar9 >> 0x10));
          auVar48[0xf] = -(cVar25 == (char)((uint)iVar9 >> 0x18));
          if ((((((((((((((((SUB161(auVar48 >> 7,0) & 1) != 0 || (SUB161(auVar48 >> 0xf,0) & 1) != 0
                           ) || (SUB161(auVar48 >> 0x17,0) & 1) != 0) ||
                         (SUB161(auVar48 >> 0x1f,0) & 1) != 0) ||
                        (SUB161(auVar48 >> 0x27,0) & 1) != 0) ||
                       (SUB161(auVar48 >> 0x2f,0) & 1) != 0) || (SUB161(auVar48 >> 0x37,0) & 1) != 0
                      ) || (SUB161(auVar48 >> 0x3f,0) & 1) != 0) ||
                    (SUB161(auVar48 >> 0x47,0) & 1) != 0) || (SUB161(auVar48 >> 0x4f,0) & 1) != 0)
                  || (SUB161(auVar48 >> 0x57,0) & 1) != 0) || (SUB161(auVar48 >> 0x5f,0) & 1) != 0)
                || (SUB161(auVar48 >> 0x67,0) & 1) != 0) || (SUB161(auVar48 >> 0x6f,0) & 1) != 0) ||
              (SUB161(auVar48 >> 0x77,0) & 1) != 0) || auVar48[0xf] < '\0') break;
          uVar32 = uVar32 + lVar30 + 0x10;
          lVar30 = lVar30 + 0x10;
        }
      }
    }
    bVar45 = *(byte *)((longlong)local_128 + 0x49);
LAB_140097297:
    if ((bVar45 & 1) != 0) {
LAB_140097403:
      lVar33 = FUN_14000c54f((ushort *)"Computer Use is not allowed on this app by policy",99);
      return lVar33;
    }
  } while( true );
}



/* Target: 0x1400a7235 */
/* Name: FUN_1400a7235
 * Entry: 1400a7235
 * Size: 132 bytes
 */

undefined8 FUN_1400a7235(longlong param_1)

{
  undefined8 uVar1;
  int local_30 [2];
  char *local_28;
  byte local_20;
  
  if (param_1 == 0) {
    uVar1 = 0;
  }
  else {
    FUN_14000e316((ulonglong *)local_30,(char *)(param_1 + 0x10));
    if (local_30[0] == 1) {
      uVar1 = FUN_14000c54f((ushort *)"cursor overlay state lock poisoned",0x45);
    }
    else if (*(int *)(local_28 + 8) == -1) {
      uVar1 = FUN_14000c54f((ushort *)"cursor overlay is no longer active",0x45);
    }
    else {
      uVar1 = FUN_14000cca0((longlong *)(local_28 + 8),(undefined *****)0xfffffffffffffffe);
    }
    FUN_1400896ed(local_28,local_20);
  }
  return uVar1;
}



/* Target: 0x1400a7db2 */
/* Name: FUN_1400a7db2
 * Entry: 1400a7db2
 * Size: 283 bytes
 */

void FUN_1400a7db2(int *param_1,undefined1 param_2)

{
  longlong *plVar1;
  char *pcVar2;
  byte bVar3;
  ulonglong uVar4;
  undefined *puVar5;
  ulonglong uVar6;
  ulonglong local_58;
  char *local_50;
  undefined8 uStack_48;
  undefined8 local_40;
  undefined8 uStack_38;
  undefined8 local_30;
  undefined8 uStack_28;
  undefined8 local_20;
  
  FUN_1400afaf2((longlong)param_1);
  FUN_1400a72e8(param_1);
  uVar6 = *(ulonglong *)(param_1 + 0xe);
  param_1[0xe] = -1;
  param_1[0xf] = -1;
  if (uVar6 != 0xffffffffffffffff) {
    local_50 = *(char **)(param_1 + 0x10);
    uStack_48 = *(undefined8 *)(param_1 + 0x12);
    local_40 = *(undefined8 *)(param_1 + 0x14);
    uStack_38 = *(undefined8 *)(param_1 + 0x16);
    local_30 = *(undefined8 *)(param_1 + 0x18);
    uStack_28 = *(undefined8 *)(param_1 + 0x1a);
    local_20 = *(undefined8 *)(param_1 + 0x1c);
    local_58 = uVar6;
    FUN_1400a77e2((longlong)&local_58,param_2);
    FUN_1400a71b9((longlong *)&local_58,param_2);
  }
  puVar5 = &DAT_1401326a3;
  FUN_1400aaf01((longlong)param_1,&DAT_1401326a3,8);
  if (*(longlong *)(param_1 + 0xa4) != 0) {
    uVar6 = *(ulonglong *)(param_1 + 0xa0);
    if (uVar6 == 0) {
      uVar6 = 0;
    }
    else {
      puVar5 = (undefined *)CONCAT71((int7)((ulonglong)puVar5 >> 8),0xff);
      memset(*(void **)(param_1 + 0x9e),(int)puVar5,uVar6 + 0x11);
    }
    param_1[0xa4] = 0;
    param_1[0xa5] = 0;
    uVar4 = (uVar6 + 1 >> 3) * 7;
    if (uVar6 < 8) {
      uVar4 = uVar6;
    }
    *(ulonglong *)(param_1 + 0xa2) = uVar4;
  }
  FUN_14000e477(&local_58,(char)puVar5);
  pcVar2 = local_50;
  bVar3 = (byte)uStack_48;
  if ((char)local_58 == '\0') {
    plVar1 = (longlong *)(local_50 + 8);
    FUN_14005332a(plVar1);
    *plVar1 = -2;
  }
  FUN_14000e594(pcVar2,bVar3);
  local_58 = 0;
  local_50 = (char *)0x8;
  uStack_48 = 0;
  FUN_14008e844(&local_58);
  return;
}



/* Target: 0x1400a88e4 */
/* Name: FUN_1400a88e4
 * Entry: 1400a88e4
 * Size: 285 bytes
 */

undefined8 FUN_1400a88e4(longlong param_1,undefined8 param_2,longlong param_3)

{
  longlong lVar1;
  ulonglong uVar2;
  longlong lVar3;
  ulonglong uVar4;
  ulonglong uVar5;
  longlong lVar6;
  undefined8 uVar7;
  ushort *puVar8;
  ulonglong uVar9;
  longlong lVar10;
  ulonglong local_58;
  LPVOID local_50;
  longlong local_48;
  
  FUN_1400aee60(param_1);
  if (*(int *)(param_1 + 0x38) == -1) {
    puVar8 = (ushort *)&DAT_14013554a;
    uVar9 = 0x7b;
LAB_1400a89de:
    uVar7 = FUN_14000c54f(puVar8,uVar9);
    return uVar7;
  }
  FUN_1400aef77(&local_58,param_2,param_3);
  lVar1 = *(longlong *)(param_1 + 0x290);
  uVar9 = *(ulonglong *)(param_1 + 0x298);
  uVar2 = *(ulonglong *)(param_1 + 0x2a0);
  lVar3 = *(longlong *)(param_1 + 0x278);
  uVar4 = *(ulonglong *)(param_1 + 0x280);
  lVar10 = 0;
  do {
    if (local_48 << 3 == lVar10) {
      FUN_140020150(local_50,local_58);
      return 0;
    }
    if (lVar1 != 0) {
      lVar6 = *(longlong *)((longlong)local_50 + lVar10);
      uVar5 = FUN_140060321(uVar9,uVar2,lVar6);
      lVar6 = FUN_1400603a7(lVar3,uVar4,uVar5,lVar6);
      if (lVar6 != 0) {
        FUN_140020150(local_50,local_58);
        puVar8 = (ushort *)&DAT_1401354fb;
        uVar9 = 0x9f;
        goto LAB_1400a89de;
      }
    }
    lVar10 = lVar10 + 8;
  } while( true );
}



/* Target: 0x1400a95ae */
/* Name: FUN_1400a95ae
 * Entry: 1400a95ae
 * Size: 718 bytes
 */

undefined8 FUN_1400a95ae(longlong param_1,uint param_2,uint param_3)

{
  undefined1 auVar1 [16];
  bool bVar2;
  DWORD DVar3;
  HWND pHVar4;
  undefined8 uVar5;
  undefined7 extraout_var;
  longlong lVar6;
  HWND pHVar7;
  SIZE_T *pSVar8;
  undefined1 (**ppauVar9) [16];
  undefined8 *puVar10;
  uint local_1c0;
  uint local_1bc;
  SIZE_T local_1b8;
  undefined8 local_1b0;
  SIZE_T local_1a0;
  undefined8 *local_198;
  undefined8 local_190;
  SIZE_T local_188;
  undefined8 *local_180;
  undefined8 local_178;
  undefined1 (*local_f0) [16];
  undefined1 (*local_e8) [16];
  uint *local_e0;
  code *local_d8;
  SIZE_T *local_d0;
  undefined1 *local_c8;
  SIZE_T *local_c0;
  undefined1 *local_b8;
  undefined1 local_88 [48];
  undefined1 (**local_58) [16];
  undefined1 *local_50;
  undefined1 *local_48;
  undefined1 *local_40;
  
  if (*(longlong *)(param_1 + 0xd0) != -1) {
    local_1c0 = param_2;
    local_1bc = param_3;
    pHVar4 = (HWND)FUN_14005f30b(param_2,(ulonglong)param_3);
    uVar5 = FUN_1400abd63(pHVar4,*(HWND *)(param_1 + 0x168));
    if ((char)uVar5 == '\0') {
      pHVar7 = *(HWND *)(param_1 + 0x170);
      uVar5 = FUN_1400abd63(pHVar4,pHVar7);
      if (((char)uVar5 == '\0') &&
         ((bVar2 = FUN_1400202d8(pHVar4), CONCAT71(extraout_var,bVar2) != 1 ||
          (uVar5 = FUN_1400abd63(pHVar7,*(HWND *)(param_1 + 0x168)), (char)uVar5 == '\0')))) {
        DVar3 = FUN_14001de68(pHVar4);
        if (DVar3 != *(DWORD *)(param_1 + 0x130)) {
LAB_1400a96f9:
          local_f0 = (undefined1 (*) [16])(param_1 + 0xd0);
          local_e0 = (uint *)(param_1 + 0x138);
          local_e8 = (undefined1 (*) [16])&LAB_140003195;
          local_d8 = (code *)&LAB_140003195;
          FUN_14000c615(&local_1b8,(ushort *)&DAT_1401325aa,(ulonglong)&local_f0);
          if (pHVar4 == (HWND)0x0) {
            FUN_14000c627(&local_188,&DAT_140135446,0x11);
          }
          else {
            FUN_1400ae27b(&local_188,pHVar4);
            puVar10 = local_180;
            if (local_188 != 0xffffffffffffffff) {
              pSVar8 = &local_188;
              ppauVar9 = &local_f0;
              for (lVar6 = 0x98; lVar6 != 0; lVar6 = lVar6 + -1) {
                *(char *)ppauVar9 = (char)*pSVar8;
                pSVar8 = (SIZE_T *)((longlong)pSVar8 + 1);
                ppauVar9 = (undefined1 (**) [16])((longlong)ppauVar9 + 1);
              }
              local_48 = local_88;
              local_50 = &LAB_140003195;
              local_40 = &LAB_140003195;
              local_58 = &local_f0;
              FUN_14000c615(&local_1a0,(ushort *)&DAT_1401325aa,(ulonglong)&local_58);
              FUN_1400733bf(&local_f0);
              puVar10 = local_198;
              if (local_1a0 != 0xffffffffffffffff) {
                local_188 = local_1a0;
                local_180 = local_198;
                local_178 = local_190;
                goto LAB_1400a980d;
              }
            }
            FUN_14000c627(&local_188,&DAT_1401325b2,0xe);
            (**(code **)*puVar10)(puVar10);
          }
LAB_1400a980d:
          local_f0 = (undefined1 (*) [16])&local_1c0;
          local_e8 = (undefined1 (*) [16])FUN_1400b6630;
          local_e0 = &local_1bc;
          local_d8 = FUN_1400b6630;
          local_d0 = &local_188;
          local_c8 = &LAB_140003195;
          local_b8 = &LAB_140003195;
          local_c0 = &local_1b8;
          uVar5 = FUN_14000c54f((ushort *)&DAT_140135457,(ulonglong)&local_f0);
          FUN_140105819(local_188,local_180);
          FUN_140105819(local_1b8,local_1b0);
          return uVar5;
        }
        local_f0 = *(undefined1 (**) [16])(param_1 + 0x2a8);
        local_e0 = (uint *)(*local_f0 + *(longlong *)(param_1 + 0x2b0) + 1);
        auVar1 = *local_f0;
        local_d0 = *(SIZE_T **)(param_1 + 0x2c0);
        local_e8 = local_f0 + 1;
        local_d8 = (code *)CONCAT62(local_d8._2_6_,
                                    ~((ushort)(SUB161(auVar1 >> 7,0) & 1) |
                                      (ushort)(SUB161(auVar1 >> 0xf,0) & 1) << 1 |
                                      (ushort)(SUB161(auVar1 >> 0x17,0) & 1) << 2 |
                                      (ushort)(SUB161(auVar1 >> 0x1f,0) & 1) << 3 |
                                      (ushort)(SUB161(auVar1 >> 0x27,0) & 1) << 4 |
                                      (ushort)(SUB161(auVar1 >> 0x2f,0) & 1) << 5 |
                                      (ushort)(SUB161(auVar1 >> 0x37,0) & 1) << 6 |
                                      (ushort)(SUB161(auVar1 >> 0x3f,0) & 1) << 7 |
                                      (ushort)(SUB161(auVar1 >> 0x47,0) & 1) << 8 |
                                      (ushort)(SUB161(auVar1 >> 0x4f,0) & 1) << 9 |
                                      (ushort)(SUB161(auVar1 >> 0x57,0) & 1) << 10 |
                                      (ushort)(SUB161(auVar1 >> 0x5f,0) & 1) << 0xb |
                                      (ushort)(SUB161(auVar1 >> 0x67,0) & 1) << 0xc |
                                      (ushort)(SUB161(auVar1 >> 0x6f,0) & 1) << 0xd |
                                      (ushort)(SUB161(auVar1 >> 0x77,0) & 1) << 0xe |
                                     (ushort)(byte)(auVar1[0xf] >> 7) << 0xf));
        do {
          if (local_d0 == (SIZE_T *)0x0) goto LAB_1400a96f9;
          lVar6 = FUN_1400622ae((longlong *)&local_f0);
          local_d0 = (SIZE_T *)((longlong)local_d0 + -1);
        } while (((((int)param_3 < *(int *)(lVar6 + -0x14)) ||
                  ((int)param_2 < *(int *)(lVar6 + -0x18))) ||
                 ((longlong)*(int *)(lVar6 + -8) + (longlong)*(int *)(lVar6 + -0x18) <=
                  (longlong)(int)param_2)) ||
                ((longlong)*(int *)(lVar6 + -4) + (longlong)*(int *)(lVar6 + -0x14) <=
                 (longlong)(int)param_3));
      }
    }
  }
  return 0;
}



/* Target: 0x1400ae4b9 */
/* Name: FUN_1400ae4b9
 * Entry: 1400ae4b9
 * Size: 174 bytes
 */

void FUN_1400ae4b9(ulonglong *param_1,HWND param_2)

{
  int iVar1;
  uint uVar2;
  longlong lVar3;
  ulonglong uVar4;
  int iVar5;
  longlong local_50;
  LPWSTR local_48;
  ulonglong local_40;
  ulonglong local_38;
  ulonglong uStack_30;
  ulonglong local_28;
  
  iVar1 = GetWindowTextLengthW(param_2);
  iVar5 = 0;
  if (0 < iVar1) {
    iVar5 = iVar1;
  }
  FUN_140022ab0(&local_50,(ulonglong)(iVar5 + 1));
  uVar2 = FUN_140025c4c(param_2,local_48,local_40);
  if ((int)uVar2 < 0) {
    uVar4 = FUN_14000c54f((ushort *)&DAT_140136570,0x2b);
    param_1[1] = uVar4;
    *param_1 = 0xffffffffffffffff;
  }
  else {
    lVar3 = FUN_140022b09(local_48,local_40,(ulonglong)uVar2,&PTR_s_src_app_rs_140136558);
    FUN_14001b92d(&local_38,lVar3,local_40);
    param_1[2] = local_28;
    *param_1 = local_38;
    param_1[1] = uStack_30;
  }
  FUN_140073033(local_50,local_48);
  return;
}



