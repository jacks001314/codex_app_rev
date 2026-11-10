import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  BO as a,
  CW as o,
  Cpn as s,
  Cz as c,
  DJt as l,
  DXt as u,
  Dz as ee,
  EJt as d,
  F3t as f,
  FKt as p,
  Hu as m,
  JG as h,
  Jrt as te,
  Jut as ne,
  KG as re,
  KWt as g,
  Mz as _,
  N3t as v,
  Nz as y,
  O3t as ie,
  OXt as b,
  Opn as ae,
  Out as oe,
  QWt as se,
  QXt as x,
  RKt as S,
  S3t as ce,
  Spn as C,
  TJt as w,
  TW as T,
  Tpn as E,
  U3t as D,
  Vdt as le,
  Vu as O,
  Xdt as k,
  Xrt as ue,
  Xu as A,
  YWt as de,
  Yrt as fe,
  ZG as j,
  Zrt as pe,
  _H as M,
  a3t as me,
  bz as N,
  eZt as P,
  edt as he,
  eit as F,
  fk as ge,
  gC as I,
  gH as _e,
  hC as L,
  hmn as R,
  iit as z,
  jG as B,
  jz as V,
  kG as H,
  kMt as ve,
  kmn as U,
  m6t as W,
  o3t as G,
  pk as K,
  qu as ye,
  rit as be,
  s3t as q,
  tit as J,
  vC as xe,
  wJt as Y,
  wW as Se,
  xpn as X,
  ylt as Ce,
  z3t as we,
  zO as Te,
} from "./app-initial-f094ef01c64d.js";
import { Gw as Ee, Kw as De, Qu as Oe, Zu as ke } from "./app-primary-4c40d73a1074.js";
import { a as Ae, n as je, o as Me, t as Ne } from "./automation-frequency-section-49a6d0cc31da.js";
import { n as Pe, t as Fe } from "./automation-delete-confirmation-dialog-c1501bf84bbd.js";
import { n as Ie, t as Le } from "./detail-section-state-48ff67356906.js";
import { d as Re, i as ze, t as Be, u as Ve } from "./workspace-agent-detail-query-ee964e0a64ba.js";
import { n as He, t as Ue } from "./read-error-f695c821b3d2.js";
var We,
  Ge,
  Ke,
  qe,
  Z,
  Je,
  Ye,
  Xe,
  Ze = e(() => {
    ((We = (function (e) {
      return (
        (e.CHATGPT_AGENT_BUILDER_PAGE_UNSPECIFIED = `CHATGPT_AGENT_BUILDER_PAGE_UNSPECIFIED`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_NEW_AGENT = `CHATGPT_AGENT_BUILDER_PAGE_NEW_AGENT`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS = `CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_PREVIEW = `CHATGPT_AGENT_BUILDER_PAGE_PREVIEW`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_ANALYTICS = `CHATGPT_AGENT_BUILDER_PAGE_ANALYTICS`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_CHANNEL_CHATGPT = `CHATGPT_AGENT_BUILDER_PAGE_CHANNEL_CHATGPT`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_CHANNEL_SLACK = `CHATGPT_AGENT_BUILDER_PAGE_CHANNEL_SLACK`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_CONNECTOR_DETAIL = `CHATGPT_AGENT_BUILDER_PAGE_CONNECTOR_DETAIL`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_FILES_ROOT = `CHATGPT_AGENT_BUILDER_PAGE_FILES_ROOT`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_FILE_DETAIL = `CHATGPT_AGENT_BUILDER_PAGE_FILE_DETAIL`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_MEMORY_ROOT = `CHATGPT_AGENT_BUILDER_PAGE_MEMORY_ROOT`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_MEMORY_CHATGPT = `CHATGPT_AGENT_BUILDER_PAGE_MEMORY_CHATGPT`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_MEMORY_SLACK = `CHATGPT_AGENT_BUILDER_PAGE_MEMORY_SLACK`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_SKILL_OVERVIEW = `CHATGPT_AGENT_BUILDER_PAGE_SKILL_OVERVIEW`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_SKILL_FILES_ROOT = `CHATGPT_AGENT_BUILDER_PAGE_SKILL_FILES_ROOT`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_SKILL_FILE_DETAIL = `CHATGPT_AGENT_BUILDER_PAGE_SKILL_FILE_DETAIL`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_UNKNOWN = `CHATGPT_AGENT_BUILDER_PAGE_UNKNOWN`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_DETAIL = `CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_DETAIL`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_HOME = `CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_HOME`),
        (e.CHATGPT_AGENT_BUILDER_PAGE_CHANNEL_API = `CHATGPT_AGENT_BUILDER_PAGE_CHANNEL_API`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (Ge = (function (e) {
        return (
          (e.CHATGPT_AGENT_BUILDER_SOURCE_UNSPECIFIED = `CHATGPT_AGENT_BUILDER_SOURCE_UNSPECIFIED`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_DIRECT = `CHATGPT_AGENT_BUILDER_SOURCE_DIRECT`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_HEADER = `CHATGPT_AGENT_BUILDER_SOURCE_HEADER`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_OVERFLOW_MENU = `CHATGPT_AGENT_BUILDER_SOURCE_OVERFLOW_MENU`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_BUILD_NAV = `CHATGPT_AGENT_BUILDER_SOURCE_BUILD_NAV`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_PREVIEW = `CHATGPT_AGENT_BUILDER_SOURCE_PREVIEW`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_CHATGPT_CHANNEL = `CHATGPT_AGENT_BUILDER_SOURCE_CHATGPT_CHANNEL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_SLACK_CHANNEL = `CHATGPT_AGENT_BUILDER_SOURCE_SLACK_CHANNEL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_APPS_MODAL = `CHATGPT_AGENT_BUILDER_SOURCE_APPS_MODAL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_CONNECTOR_DETAIL = `CHATGPT_AGENT_BUILDER_SOURCE_CONNECTOR_DETAIL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_FILES_DETAIL = `CHATGPT_AGENT_BUILDER_SOURCE_FILES_DETAIL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_SKILL_DETAIL = `CHATGPT_AGENT_BUILDER_SOURCE_SKILL_DETAIL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_SCHEDULES_MODAL = `CHATGPT_AGENT_BUILDER_SOURCE_SCHEDULES_MODAL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_SHARE_MODAL = `CHATGPT_AGENT_BUILDER_SOURCE_SHARE_MODAL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_CHAT_SIDEBAR = `CHATGPT_AGENT_BUILDER_SOURCE_CHAT_SIDEBAR`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_SIDEBAR_WIDGET = `CHATGPT_AGENT_BUILDER_SOURCE_SIDEBAR_WIDGET`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_INSTRUCTIONS_SLASH_COMMAND = `CHATGPT_AGENT_BUILDER_SOURCE_INSTRUCTIONS_SLASH_COMMAND`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_TEMPLATE_GALLERY = `CHATGPT_AGENT_BUILDER_SOURCE_TEMPLATE_GALLERY`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_HISTORY_MODAL = `CHATGPT_AGENT_BUILDER_SOURCE_HISTORY_MODAL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_PUBLISH_MODAL = `CHATGPT_AGENT_BUILDER_SOURCE_PUBLISH_MODAL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_ANALYTICS = `CHATGPT_AGENT_BUILDER_SOURCE_ANALYTICS`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_MEMORY_DETAIL = `CHATGPT_AGENT_BUILDER_SOURCE_MEMORY_DETAIL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_SETTINGS_MODAL = `CHATGPT_AGENT_BUILDER_SOURCE_SETTINGS_MODAL`),
          (e.CHATGPT_AGENT_BUILDER_SOURCE_WHATS_NEW_MODAL = `CHATGPT_AGENT_BUILDER_SOURCE_WHATS_NEW_MODAL`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (Ke = (function (e) {
        return (
          (e.CHATGPT_AGENT_BUILDER_ACTION_RESULT_UNSPECIFIED = `CHATGPT_AGENT_BUILDER_ACTION_RESULT_UNSPECIFIED`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED = `CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_RESULT_SUCCEEDED = `CHATGPT_AGENT_BUILDER_ACTION_RESULT_SUCCEEDED`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_RESULT_FAILED = `CHATGPT_AGENT_BUILDER_ACTION_RESULT_FAILED`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_RESULT_BLOCKED = `CHATGPT_AGENT_BUILDER_ACTION_RESULT_BLOCKED`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_RESULT_CANCELED = `CHATGPT_AGENT_BUILDER_ACTION_RESULT_CANCELED`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (qe = (function (e) {
        return (
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_UNSPECIFIED = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_UNSPECIFIED`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_AGENT = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_AGENT`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_CONNECTOR = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_CONNECTOR`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SKILL = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SKILL`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_FILE = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_FILE`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_MEMORY = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_MEMORY`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_CHATGPT_CHANNEL = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_CHATGPT_CHANNEL`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SLACK_CHANNEL = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SLACK_CHANNEL`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SCHEDULE = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SCHEDULE`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_VERSION = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_VERSION`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_STARTER_PROMPT = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_STARTER_PROMPT`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_TEMPLATE = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_TEMPLATE`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SIDEBAR_WIDGET = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SIDEBAR_WIDGET`),
          (e.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_ANALYTICS_RUN = `CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_ANALYTICS_RUN`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (Z = (function (e) {
        return (
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_UNSPECIFIED = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_UNSPECIFIED`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_MOBILE_SIDEBAR_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_MOBILE_SIDEBAR_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_BUILD_NAV_ITEM_CLICK = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_BUILD_NAV_ITEM_CLICK`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_BUILD_NAV_TOOLS_EXPAND = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_BUILD_NAV_TOOLS_EXPAND`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_BUILD_NAV_SKILLS_EXPAND = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_BUILD_NAV_SKILLS_EXPAND`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PREVIEW_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PREVIEW_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PREVIEW_BLOCKED_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PREVIEW_BLOCKED_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PREVIEW_CLOSE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PREVIEW_CLOSE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PREVIEW_NEW_RUN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PREVIEW_NEW_RUN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_ANALYTICS_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_ANALYTICS_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_UNSAVED_NAVIGATION = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_UNSAVED_NAVIGATION`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_AGENT_NAME_EDIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_AGENT_NAME_EDIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_TAGLINE_EDIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_TAGLINE_EDIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_INSTRUCTIONS_EDIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_INSTRUCTIONS_EDIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_ICON_PICKER_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_ICON_PICKER_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_ICON_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_ICON_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_FIX_IN_CHAT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_FIX_IN_CHAT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_MISSING_CONNECTION_CONNECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_MISSING_CONNECTION_CONNECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_SHARED_CONNECTOR_CONSENT_CONFIRM = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_SHARED_CONNECTOR_CONSENT_CONFIRM`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PENDING_CHANGE_UNDO = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PENDING_CHANGE_UNDO`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_VERSION_HISTORY_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_VERSION_HISTORY_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_VERSION_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_VERSION_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_VERSION_RESTORE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_VERSION_RESTORE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_TRY_IN_CHATGPT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_TRY_IN_CHATGPT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DUPLICATE_AGENT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_DUPLICATE_AGENT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DELETE_AGENT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_DELETE_AGENT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_NEW_AGENT_STARTER_PROMPT_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_NEW_AGENT_STARTER_PROMPT_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_START_BLANK = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_START_BLANK`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_TEMPLATE_GALLERY_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_TEMPLATE_GALLERY_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_TEMPLATE_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_TEMPLATE_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_TEMPLATE_USE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_TEMPLATE_USE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SIDEBAR_WIDGET = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SIDEBAR_WIDGET`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CHECKPOINT_UNDO = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CHECKPOINT_UNDO`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_AGENT_PLAN_EDIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_AGENT_PLAN_EDIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_AGENT_PLAN_CONFIRM = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_AGENT_PLAN_CONFIRM`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SIDEBAR_CHAT_SUBMIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SIDEBAR_CHAT_SUBMIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_MISSING_APP_LINK_CONNECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_MISSING_APP_LINK_CONNECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_FROM_WIDGET = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_FROM_WIDGET`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_APPS_MODAL_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_APPS_MODAL_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_APP_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_APP_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_APPS_MODAL_SLACK_AS_TOOL = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_APPS_MODAL_SLACK_AS_TOOL`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_APPS_MODAL_SLACK_AS_CHANNEL = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_APPS_MODAL_SLACK_AS_CHANNEL`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_APP_ADD = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_APP_ADD`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_APP_CONNECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_APP_CONNECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_APP_REMOVE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_APP_REMOVE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_CONNECTION_MODE_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_CONNECTION_MODE_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_ACTION_TOGGLE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_ACTION_TOGGLE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_ACTIONS_BULK_TOGGLE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_ACTIONS_BULK_TOGGLE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_WRITE_SAFETY_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_WRITE_SAFETY_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_PARAMETER_CONSTRAINTS_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_PARAMETER_CONSTRAINTS_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_PARAMETER_CONSTRAINTS_SAVE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_PARAMETER_CONSTRAINTS_SAVE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_RECONNECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CONNECTOR_RECONNECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_CUSTOM_MCP_CREATE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_CUSTOM_MCP_CREATE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_LEGACY_CONNECTOR_UPGRADE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_LEGACY_CONNECTOR_UPGRADE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_UPLOAD_PICKER_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_UPLOAD_PICKER_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_UPLOAD = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_UPLOAD`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FOLDER_CREATE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FOLDER_CREATE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_RENAME = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_RENAME`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_DELETE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_DELETE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_CONTENT_EDIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_CONTENT_EDIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_CONTENT_SAVE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_CONTENT_SAVE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_LOAD_RETRY = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_LOAD_RETRY`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_DOWNLOAD = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FILE_DOWNLOAD`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILLS_MODAL_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILLS_MODAL_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILLS_CREATE_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILLS_CREATE_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILLS_UPLOAD_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILLS_UPLOAD_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DIRECTORY_SKILL_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_DIRECTORY_SKILL_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DIRECTORY_SKILL_ATTACH = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_DIRECTORY_SKILL_ATTACH`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_GENERATE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_GENERATE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_UPLOAD = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_UPLOAD`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_REPLACE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_REPLACE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_REMOVE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_REMOVE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_VIEW_MODE_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_VIEW_MODE_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_DOWNLOAD = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_DOWNLOAD`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_MODAL_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_MODAL_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_ENABLE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_ENABLE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_DISABLE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_DISABLE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DIRECTORY_LISTING_TOGGLE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_DIRECTORY_LISTING_TOGGLE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_LINK_COPY = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_LINK_COPY`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_STARTER_PROMPT_ADD = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_STARTER_PROMPT_ADD`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_STARTER_PROMPT_CREATE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_STARTER_PROMPT_CREATE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_STARTER_PROMPT_EDIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_STARTER_PROMPT_EDIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_STARTER_PROMPT_DELETE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_STARTER_PROMPT_DELETE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_VIEW_AGENT_IN_CHATGPT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_VIEW_AGENT_IN_CHATGPT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_MODAL_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_MODAL_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CONNECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CONNECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_HANDLE_CREATE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_HANDLE_CREATE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_HANDLE_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_HANDLE_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_SUBMIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_SUBMIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_JOIN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_JOIN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_DEPLOYMENT_ADD = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_DEPLOYMENT_ADD`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_RESPONSE_MODE_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_RESPONSE_MODE_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_INSTRUCTIONS_EDIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_INSTRUCTIONS_EDIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_REMOVE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_REMOVE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_RECONNECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_RECONNECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_WORKSPACE_DISCONNECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_WORKSPACE_DISCONNECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULES_MODAL_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULES_MODAL_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_ADD = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_ADD`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CREATE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CREATE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_UPDATE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_UPDATE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_DELETE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_DELETE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_RUN_NOW = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_RUN_NOW`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CONNECTOR_REPAIR = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CONNECTOR_REPAIR`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CHANNEL_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CHANNEL_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_BEFORE_SCHEDULING = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_PUBLISH_BEFORE_SCHEDULING`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_MEMORY_ENABLE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_MEMORY_ENABLE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_MEMORY_REMOVE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_MEMORY_REMOVE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_ANALYTICS_TIME_RANGE_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_ANALYTICS_TIME_RANGE_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_ANALYTICS_RUN_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_ANALYTICS_RUN_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_ANALYTICS_RETRY = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_ANALYTICS_RETRY`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DRAFT_AUTOSAVE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_DRAFT_AUTOSAVE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DRAFT_SAVE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_DRAFT_SAVE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DRAFT_SAVE_RETRY = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_DRAFT_SAVE_RETRY`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_BUILDER_EXIT_CLICK = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_BUILDER_EXIT_CLICK`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_FULLSCREEN_CHAT_SUBMIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_FULLSCREEN_CHAT_SUBMIT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SIDEBAR_FOLLOW_UP_SUGGESTION_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SIDEBAR_FOLLOW_UP_SUGGESTION_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SETTINGS_MODAL_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SETTINGS_MODAL_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SETTINGS_MODEL_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SETTINGS_MODEL_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SETTINGS_REASONING_EFFORT_CHANGE = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_SETTINGS_REASONING_EFFORT_CHANGE`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_WHATS_NEW_MODAL_OPEN = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_WHATS_NEW_MODAL_OPEN`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_WHATS_NEW_UPDATE_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_WHATS_NEW_UPDATE_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_WHATS_NEW_FEEDBACK_SELECT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_WHATS_NEW_FEEDBACK_SELECT`),
          (e.CHATGPT_AGENT_BUILDER_ACTION_TYPE_WHATS_NEW_FEEDBACK_SUBMIT = `CHATGPT_AGENT_BUILDER_ACTION_TYPE_WHATS_NEW_FEEDBACK_SUBMIT`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (Je = (function (e) {
        return (
          (e.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_UNSPECIFIED = `CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_UNSPECIFIED`),
          (e.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_HOURLY = `CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_HOURLY`),
          (e.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_WEEKLY = `CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_WEEKLY`),
          (e.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_CUSTOM = `CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_CUSTOM`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (Ye = (function (e) {
        return (
          (e.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_UNSPECIFIED = `CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_UNSPECIFIED`),
          (e.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT = `CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT`),
          (e.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK = `CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (Xe = { $type: `protobuf_analytics_events.v1.ChatgptAgentBuilderAction` }));
  });
function Qe(e, t, n, r) {
  let i = Date.now(),
    a = `analytics-id-${crypto.randomUUID()}`,
    o = Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_UPDATE;
  n == null
    ? (o = Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_DELETE)
    : (r ?? (o = Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CREATE));
  let s = n?.rules[0]?.freq,
    c = Je.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_CUSTOM;
  s === `hourly`
    ? (c = Je.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_HOURLY)
    : (s === `daily` || s === `weekly`) && (c = Je.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_WEEKLY);
  let l =
      n == null
        ? { scheduleTriggerId: r }
        : {
            scheduleTriggerId: r,
            scheduleType: c,
            channelType:
              n.channel_binding?.type === `slack`
                ? Ye.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK
                : Ye.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT,
          },
    u = (n, r) => {
      $e(e, t, {
        actionType: o,
        actionResult: n,
        actionInstanceId: a,
        schedule: l,
        request: r ? { durationMs: Math.max(0, Date.now() - i) } : void 0,
      });
    };
  return (
    u(Ke.CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED, !1),
    (e) =>
      u(
        e
          ? Ke.CHATGPT_AGENT_BUILDER_ACTION_RESULT_SUCCEEDED
          : Ke.CHATGPT_AGENT_BUILDER_ACTION_RESULT_FAILED,
        !0,
      )
  );
}
function $e(e, t, n) {
  try {
    let r = e.get(et);
    (e.set(et, { ...r, sequence: r.sequence + 1 }),
      P(e, Xe, {
        ...n,
        agentId: t,
        builderSessionId: r.id,
        builderSequenceNumber: r.sequence + 1,
        page: We.CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_DETAIL,
        source: Ge.CHATGPT_AGENT_BUILDER_SOURCE_SCHEDULES_MODAL,
        resourceType: n.schedule == null ? void 0 : qe.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SCHEDULE,
      }));
  } catch {}
}
var et,
  tt = e(() => {
    (Ze(),
      ie(),
      x(),
      G(),
      (et = W(me, () => ({ id: `builder-session-id-${crypto.randomUUID()}`, sequence: 0 }))));
  }),
  nt,
  rt = e(() => {
    (C(),
      (nt = X({
        chatGptDestination: {
          id: `workspaceAgents.schedules.chatGptDestination`,
          defaultMessage: `ChatGPT`,
          description: `Destination label for a private Workspace Agent automation in ChatGPT`,
        },
      })));
  });
function it(e) {
  let t = { freq: dt[e.freq], interval: e.interval ?? 1 };
  return (
    e.hour != null && (t.byhour = e.hour),
    e.minute != null && (t.byminute = e.minute),
    e.byweekday != null && (t.byweekday = e.byweekday),
    e.bymonthday != null && (t.bymonthday = e.bymonthday),
    V(new y(t).toString())
  );
}
function at(e) {
  if (e.oneTimeDate != null || e.untilDate != null) return null;
  try {
    let t = y.parseString(N(e));
    if (Object.keys(t).some((e) => !ft.has(e))) return null;
    let n = Object.entries(dt).find(([, e]) => e === t.freq)?.[0];
    if (n !== `minutely` && n !== `hourly` && n !== `daily` && n !== `weekly` && n !== `monthly`)
      return null;
    let r = lt(t.byhour),
      i = lt(t.byminute),
      a = lt(t.bysecond);
    if (r === !1 || i === !1 || a === !1 || (a != null && a !== 0)) return null;
    let o = t.byweekday == null ? null : [t.byweekday].flat();
    if (o?.some((e) => typeof e == `string` || (typeof e != `number` && e.n != null))) return null;
    let s = o?.flatMap((e) => (typeof e == `string` ? [] : [typeof e == `number` ? e : e.weekday])),
      c = t.interval ?? 1;
    return !Number.isInteger(c) || c < 1 || (n === `minutely` && c < 15)
      ? null
      : {
          freq: n,
          interval: c,
          hour: r,
          minute: i,
          byweekday: s,
          bymonthday: t.bymonthday == null ? null : [t.bymonthday].flat(),
        };
  } catch {
    return null;
  }
}
function ot({ resource: e, userId: t, agentCreatorId: n, canAccess: r, canShare: i }) {
  if (!r || t == null || e.trigger.type !== `SCHEDULE`) return { canEdit: !1, canDelete: !1 };
  let a = e.owner_user_id === t;
  if (e.trigger.channel_binding?.type !== `slack`) return { canEdit: a, canDelete: a };
  let o = i && n === t;
  return { canEdit: o && a, canDelete: o };
}
function st(e) {
  return (e?.config?.deployments?.slack ?? []).flatMap((e) => {
    let { slack_trigger: t } = e,
      n = t.params?.channel_id;
    if (e.pending_deletion || t.enabled === !1 || typeof n != `string` || !n || !t.link.id)
      return [];
    let r = t.params?.channel_name;
    return [
      {
        id: e.deployment_id,
        label: `#${typeof r == `string` ? r.replace(/^#/, ``) : n}`,
        binding: { type: `slack`, link_id: t.link.id, channel_id: n },
        parentTriggerId: e.materialized_trigger_id ?? void 0,
      },
    ];
  });
}
function ct(e, t) {
  return e.find(({ binding: e }) =>
    e.type === `slack`
      ? t?.type === `slack` && e.channel_id === t.channel_id && e.link_id === t.link_id
      : t?.type !== `slack`,
  );
}
function lt(e) {
  return e == null ? null : typeof e == `number` ? e : e.length === 1 && e[0];
}
function ut(e, t) {
  let n = E({ ...t, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }),
    r = t.formatList(
      e.rules.map(
        (e) =>
          c(it(e), n) ??
          t.formatMessage({
            id: `workspaceAgents.schedules.custom`,
            defaultMessage: `Custom schedule`,
            description: `Fallback name for an agent schedule`,
          }),
      ),
    );
  return t.formatMessage(
    {
      id: `workspaceAgents.schedules.summaryWithTimeZone`,
      defaultMessage: `{schedule} ({timeZone})`,
      description: `An automation schedule followed by the saved time zone in which its times apply`,
    },
    { schedule: r, timeZone: e.tz ?? `UTC` },
  );
}
var dt,
  ft,
  pt = e(() => {
    (C(),
      _(),
      ee(),
      (dt = {
        minutely: y.MINUTELY,
        hourly: y.HOURLY,
        daily: y.DAILY,
        weekly: y.WEEKLY,
        monthly: y.MONTHLY,
      }),
      (ft = new Set([
        `freq`,
        `interval`,
        `byhour`,
        `byminute`,
        `byweekday`,
        `bymonthday`,
        `bysecond`,
      ])));
  });
function mt(e) {
  let t = (0, xt.c)(104),
    {
      trigger: n,
      destinations: r,
      canEdit: i,
      pending: a,
      error: c,
      onClose: l,
      onSave: u,
      notice: ee,
      saveDisabled: d,
      onInteraction: f,
    } = e,
    p = d !== void 0 && d,
    m = ae(),
    [h, ne] = (0, St.useState)(n?.instructions ?? ``),
    re;
  t[0] === n
    ? (re = t[1])
    : ((re = n == null ? new Intl.DateTimeFormat().resolvedOptions().timeZone : (n.tz ?? `UTC`)),
      (t[0] = n),
      (t[1] = re));
  let [g, _] = (0, St.useState)(re),
    v;
  t[2] === n?.rules
    ? (v = t[3])
    : ((v = () =>
        (
          n?.rules ?? [
            { freq: `weekly`, hour: 9, minute: 0, byweekday: [0, 1, 2, 3, 4], interval: 1 },
          ]
        ).map(yt)),
      (t[2] = n?.rules),
      (t[3] = v));
  let [y, ie] = (0, St.useState)(v),
    [b, oe] = (0, St.useState)(null),
    se = n?.channel_binding,
    x;
  t[4] !== r || t[5] !== se ? ((x = ct(r, se)), (t[4] = r), (t[5] = se), (t[6] = x)) : (x = t[6]);
  let S = x,
    ce;
  t[7] !== b || t[8] !== r || t[9] !== S
    ? ((ce =
        r.find((e) => {
          let { id: t } = e;
          return t === b;
        }) ?? S),
      (t[7] = b),
      (t[8] = r),
      (t[9] = S),
      (t[10] = ce))
    : (ce = t[10]);
  let C = ce,
    w;
  t[11] !== C?.binding || t[12] !== n?.channel_binding
    ? ((w = C?.binding ?? n?.channel_binding ?? { type: `chatgpt` }),
      (t[11] = C?.binding),
      (t[12] = n?.channel_binding),
      (t[13] = w))
    : (w = t[13]);
  let T = w,
    E = C?.parentTriggerId ?? (C === S ? n?.parent_trigger_id : void 0),
    D,
    le,
    k;
  if (t[14] !== y || t[15] !== g) {
    ((D = y.map(vt)), (k = !0));
    try {
      new Intl.DateTimeFormat(void 0, { timeZone: g });
    } catch {
      k = !1;
    }
    ((le = D.every(_t)), (t[14] = y), (t[15] = g), (t[16] = D), (t[17] = le), (t[18] = k));
  } else ((D = t[16]), (le = t[17]), (k = t[18]));
  let A = le,
    de = T.type === `slack` && !E,
    j = i && !a && !p && h.length <= 6e3 && k && A && y.length > 0 && !de,
    M;
  t[19] !== T ||
  t[20] !== j ||
  t[21] !== h ||
  t[22] !== D ||
  t[23] !== u ||
  t[24] !== E ||
  t[25] !== g ||
  t[26] !== n
    ? ((M = (e) => {
        (e.preventDefault(),
          j &&
            u({
              ...n,
              type: `SCHEDULE`,
              enabled: n?.enabled ?? !0,
              instructions: h,
              tz: g,
              channel_binding: T,
              parent_trigger_id: T.type === `slack` ? E : void 0,
              rules: D.filter(gt),
            }));
      }),
      (t[19] = T),
      (t[20] = j),
      (t[21] = h),
      (t[22] = D),
      (t[23] = u),
      (t[24] = E),
      (t[25] = g),
      (t[26] = n),
      (t[27] = M))
    : (M = t[27]);
  let me;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Q.jsx)(pe, {
        children: (0, Q.jsx)(ue, {
          title: (0, Q.jsx)(be, {
            children: (0, Q.jsx)(s, {
              id: `workspaceAgents.schedules.editor.title`,
              defaultMessage: `Scheduled automation`,
              description: `Title of the editor for a Workspace Agent's scheduled run`,
            }),
          }),
        }),
      })),
      (t[28] = me))
    : (me = t[28]);
  let N;
  t[29] === c
    ? (N = t[30])
    : ((N = c == null ? null : (0, Q.jsx)(Te, { type: `error`, content: c })),
      (t[29] = c),
      (t[30] = N));
  let P;
  t[31] !== i || t[32] !== de
    ? ((P =
        !i || de
          ? (0, Q.jsx)(Te, {
              type: `normal`,
              content: (0, Q.jsx)(s, {
                id: `workspaceAgents.schedules.readOnly`,
                defaultMessage: `You can view this automation, but cannot change it with your current access or channel connection`,
                description: `Notice when permissions or a missing Slack connection prevent editing an agent schedule`,
              }),
            })
          : null),
      (t[31] = i),
      (t[32] = de),
      (t[33] = P))
    : (P = t[33]);
  let he = !i || a,
    F;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsx)(`span`, {
        className: `text-sm font-medium text-default select-none`,
        children: (0, Q.jsx)(s, {
          id: `workspaceAgents.schedules.prompt`,
          defaultMessage: `Instructions`,
          description: `Label for optional instructions used when a scheduled agent runs`,
        }),
      })),
      (t[34] = F))
    : (F = t[34]);
  let ge;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (e) => ne(e.target.value)), (t[35] = ge))
    : (ge = t[35]);
  let I;
  t[36] === h
    ? (I = t[37])
    : ((I = (0, Q.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          F,
          (0, Q.jsx)(Se, {
            autoFocus: !0,
            name: `instructions`,
            rows: 4,
            maxLength: 6e3,
            value: h,
            onChange: ge,
          }),
        ],
      })),
      (t[36] = h),
      (t[37] = I));
  let _e;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Q.jsx)(s, {
        id: `workspaceAgents.schedules.destination`,
        defaultMessage: `Destination`,
        description: `Label for where an agent's scheduled run will appear`,
      })),
      (t[38] = _e))
    : (_e = t[38]);
  let L;
  t[39] === m
    ? (L = t[40])
    : ((L = m.formatMessage({
        id: `workspaceAgents.schedules.destinationLabel`,
        defaultMessage: `Automation destination`,
        description: `Accessible label for choosing where a scheduled agent runs`,
      })),
      (t[39] = m),
      (t[40] = L));
  let R;
  t[41] === r ? (R = t[42]) : ((R = r.map(ht)), (t[41] = r), (t[42] = R));
  let z = C?.id ?? ``,
    B;
  t[43] !== T.channel_id || t[44] !== T.type || t[45] !== C?.label || t[46] !== m
    ? ((B =
        T.type === `slack`
          ? (C?.label ?? `#${T.channel_id}`)
          : m.formatMessage(nt.chatGptDestination)),
      (t[43] = T.channel_id),
      (t[44] = T.type),
      (t[45] = C?.label),
      (t[46] = m),
      (t[47] = B))
    : (B = t[47]);
  let V;
  t[48] !== r || t[49] !== f
    ? ((V = (e) => {
        (oe(e),
          f?.({
            actionType: Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CHANNEL_CHANGE,
            schedule: {
              channelType:
                r.find((t) => t.id === e)?.binding.type === `slack`
                  ? Ye.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK
                  : Ye.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT,
            },
          }));
      }),
      (t[48] = r),
      (t[49] = f),
      (t[50] = V))
    : (V = t[50]);
  let H;
  t[51] !== L || t[52] !== R || t[53] !== z || t[54] !== B || t[55] !== V
    ? ((H = (0, Q.jsx)(ye, {
        label: _e,
        control: (0, Q.jsx)(Ae, {
          ariaLabel: L,
          options: R,
          selectedId: z,
          selectedLabel: B,
          onSelect: V,
        }),
      })),
      (t[51] = L),
      (t[52] = R),
      (t[53] = z),
      (t[54] = B),
      (t[55] = V),
      (t[56] = H))
    : (H = t[56]);
  let U;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Q.jsx)(s, {
        id: `workspaceAgents.schedules.timezone`,
        defaultMessage: `Time zone`,
        description: `Label for the IANA time zone used by an agent schedule`,
      })),
      (t[57] = U))
    : (U = t[57]);
  let W;
  t[58] === m
    ? (W = t[59])
    : ((W = m.formatMessage({
        id: `workspaceAgents.schedules.timezoneLabel`,
        defaultMessage: `Schedule time zone`,
        description: `Accessible label for editing a schedule's IANA time zone`,
      })),
      (t[58] = m),
      (t[59] = W));
  let G;
  t[60] === f
    ? (G = t[61])
    : ((G = (e) => {
        (_(e.target.value),
          f?.({
            actionType: Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE,
            schedule: {},
          }));
      }),
      (t[60] = f),
      (t[61] = G));
  let K;
  t[62] !== W || t[63] !== G || t[64] !== g
    ? ((K = (0, Q.jsx)(ye, {
        label: U,
        control: (0, Q.jsx)(o, {
          variant: `ghost`,
          name: `timezone`,
          "aria-label": W,
          "aria-invalid": !k,
          value: g,
          onChange: G,
        }),
      })),
      (t[62] = W),
      (t[63] = G),
      (t[64] = g),
      (t[65] = K))
    : (K = t[65]);
  let q;
  t[66] !== H || t[67] !== K
    ? ((q = (0, Q.jsxs)(O, { children: [H, K] })), (t[66] = H), (t[67] = K), (t[68] = q))
    : (q = t[68]);
  let J;
  if (t[69] !== f || t[70] !== y || t[71] !== g) {
    let e;
    (t[73] !== f || t[74] !== g
      ? ((e = (e, t) =>
          (0, Q.jsx)(
            Ne,
            {
              intervalStyle: `default`,
              scheduleSource: `local`,
              timeZone: g,
              scheduleConfig: e.config,
              onUpdateScheduleDraft: (n) => {
                let r = bt(n.mode);
                (f?.({
                  actionType:
                    r === bt(e.config.mode)
                      ? Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE
                      : Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE,
                  schedule: { scheduleType: r },
                }),
                  ie((e) => e.map((e, r) => (r === t ? { ...e, config: n, dirty: !0 } : e))));
              },
            },
            t,
          )),
        (t[73] = f),
        (t[74] = g),
        (t[75] = e))
      : (e = t[75]),
      (J = y.map(e)),
      (t[69] = f),
      (t[70] = y),
      (t[71] = g),
      (t[72] = J));
  } else J = t[72];
  let xe;
  t[76] === A
    ? (xe = t[77])
    : ((xe = A
        ? null
        : (0, Q.jsx)(Te, {
            type: `error`,
            content: (0, Q.jsx)(s, {
              id: `workspaceAgents.schedules.invalidRule`,
              defaultMessage: `Choose a repeating schedule with one time per rule, at least 15 minutes apart, without a year, end date, or numbered weekday`,
              description: `Validation error for a recurrence that the Workspace Agent schedule service cannot represent`,
            }),
          })),
      (t[76] = A),
      (t[77] = xe));
  let Y;
  t[78] !== he || t[79] !== I || t[80] !== q || t[81] !== J || t[82] !== xe
    ? ((Y = (0, Q.jsxs)(`fieldset`, {
        disabled: he,
        className: `flex min-w-0 flex-col gap-4`,
        children: [I, q, J, xe],
      })),
      (t[78] = he),
      (t[79] = I),
      (t[80] = q),
      (t[81] = J),
      (t[82] = xe),
      (t[83] = Y))
    : (Y = t[83]);
  let X;
  t[84] !== ee || t[85] !== N || t[86] !== P || t[87] !== Y
    ? ((X = (0, Q.jsxs)(pe, { children: [ee, N, P, Y] })),
      (t[84] = ee),
      (t[85] = N),
      (t[86] = P),
      (t[87] = Y),
      (t[88] = X))
    : (X = t[88]);
  let Ce;
  t[89] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, Q.jsx)(s, {
        id: `workspaceAgents.schedules.back`,
        defaultMessage: `Back`,
        description: `Returns to the automation list without saving the schedule`,
      })),
      (t[89] = Ce))
    : (Ce = t[89]);
  let we;
  t[90] !== l || t[91] !== a
    ? ((we = (0, Q.jsx)(ve, {
        color: `outline`,
        type: `button`,
        disabled: a,
        onClick: l,
        children: Ce,
      })),
      (t[90] = l),
      (t[91] = a),
      (t[92] = we))
    : (we = t[92]);
  let Ee;
  t[93] !== i || t[94] !== j || t[95] !== a
    ? ((Ee = i
        ? (0, Q.jsx)(ve, {
            type: `submit`,
            disabled: !j,
            loading: a,
            children: (0, Q.jsx)(s, {
              id: `workspaceAgents.schedules.save`,
              defaultMessage: `Save`,
              description: `Saves a Workspace Agent automation`,
            }),
          })
        : null),
      (t[93] = i),
      (t[94] = j),
      (t[95] = a),
      (t[96] = Ee))
    : (Ee = t[96]);
  let De;
  t[97] !== we || t[98] !== Ee
    ? ((De = (0, Q.jsx)(pe, { children: (0, Q.jsxs)(fe, { children: [we, Ee] }) })),
      (t[97] = we),
      (t[98] = Ee),
      (t[99] = De))
    : (De = t[99]);
  let Oe;
  return (
    t[100] !== X || t[101] !== De || t[102] !== M
      ? ((Oe = (0, Q.jsxs)(te, {
          as: `form`,
          size: `viewport`,
          onSubmit: M,
          children: [me, X, De],
        })),
        (t[100] = X),
        (t[101] = De),
        (t[102] = M),
        (t[103] = Oe))
      : (Oe = t[103]),
    Oe
  );
}
function ht(e) {
  let { id: t, label: n } = e;
  return { id: t, label: n };
}
function gt(e) {
  return e != null;
}
function _t(e) {
  return e != null;
}
function vt(e) {
  return e.dirty ? at(e.config) : e.original;
}
function yt(e) {
  return { original: e, config: it(e), dirty: !1 };
}
function bt(e) {
  return e === `hourly`
    ? Je.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_HOURLY
    : [`daily`, `weekdays`, `weekly`].includes(e)
      ? Je.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_WEEKLY
      : Je.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_CUSTOM;
}
var xt,
  St,
  Q,
  Ct = e(() => {
    ((xt = U()),
      Ze(),
      (St = t(i(), 1)),
      C(),
      je(),
      Me(),
      a(),
      r(),
      z(),
      F(),
      T(),
      A(),
      m(),
      rt(),
      pt(),
      (Q = R()));
  }),
  wt,
  Tt,
  Et = e(() => {
    (ie(),
      se(),
      u(),
      d(),
      G(),
      w(),
      S(),
      L(),
      Re(),
      Be(),
      tt(),
      pt(),
      (wt = D(me, (e, { get: t }) => {
        let n = t(g);
        return {
          enabled: n != null && t(I) === !0,
          queryKey: [`workspace-agent`, `schedules`, n, e],
          queryFn: ({ signal: t }) =>
            p.safeGet(`/hermes/agent/{agent_id}/triggers`, {
              parameters: { path: { agent_id: e }, query: { scope: `all_accessible` } },
              signal: t,
            }),
          staleTime: Y.ONE_MINUTE,
          retry: !1,
        };
      })),
      (Tt = we(me, (e, { scope: t }) => ({
        mutationFn: async (n) => {
          let r = () => {
            if (t.get(g) !== n.accountId || t.get(I) !== !0)
              throw Error(
                t.get(b).formatMessage({
                  id: `workspaceAgents.schedules.errors.accountChanged`,
                  defaultMessage: `The active workspace changed. Reopen the agent and try again`,
                  description: `Error when the active workspace changes while editing a schedule`,
                }),
              );
          };
          r();
          let i = await t.query.getOrFetch(ze, e);
          r();
          let a = t.get(de).accountUserId,
            o = t.get(xe) === !0;
          if (a == null)
            throw Error(
              t.get(b).formatMessage({
                id: `workspaceAgents.schedules.errors.identityMissing`,
                defaultMessage: `Your workspace identity could not be loaded. Try again`,
                description: `Error when the current workspace user identity is unavailable`,
              }),
            );
          if (n.resource != null) {
            let e = ot({
              resource: n.resource,
              userId: a,
              agentCreatorId: i.agent.creator_id,
              canAccess: !0,
              canShare: o,
            });
            if (`delete` in n ? !e.canDelete : !e.canEdit)
              throw Error(
                t.get(b).formatMessage({
                  id: `workspaceAgents.schedules.errors.permission`,
                  defaultMessage: `You do not have permission to change this automation`,
                  description: `Error when the user cannot modify an agent schedule`,
                }),
              );
          }
          if (
            !(`delete` in n) &&
            n.trigger.channel_binding?.type === `slack` &&
            (!o || i.agent.creator_id !== a)
          )
            throw Error(
              t.get(b).formatMessage({
                id: `workspaceAgents.schedules.errors.slackPermission`,
                defaultMessage: `Only the agent owner can manage Slack automations`,
                description: `Error when a user cannot manage an agent schedule in Slack`,
              }),
            );
          if (n.resource == null) {
            if (i.latest_published_version == null)
              throw Error(
                t.get(b).formatMessage({
                  id: `workspaceAgents.schedules.errors.unpublished`,
                  defaultMessage: `Publish the agent before adding an automation`,
                  description: `Error when scheduling an agent that has never been published`,
                }),
              );
            let a = await t.queryClient.fetchQuery(
              Ve({ accountId: n.accountId, agentId: e, versionScope: `published` }),
            );
            if (
              (r(),
              a.some(
                (e) =>
                  e.auth_type === `PERSONAL` &&
                  [
                    `missing_link`,
                    `missing_actions`,
                    `needs_reconnect`,
                    `scope_upgrade_required`,
                  ].includes(e.link_status),
              ))
            )
              throw Error(
                t.get(b).formatMessage({
                  id: `workspaceAgents.schedules.errors.connections`,
                  defaultMessage: `Connect or reconnect this agent's apps before creating an automation`,
                  description: `Error when required personal app connections prevent schedule creation`,
                }),
              );
          }
          r();
          let s = Qe(t, e, `delete` in n ? null : n.trigger, n.resource?.id);
          try {
            (`delete` in n
              ? await p.safeDelete(`/hermes/agent/{agent_id}/triggers/{trigger_id}`, {
                  parameters: { path: { agent_id: e, trigger_id: n.resource.id } },
                })
              : n.resource == null
                ? await p.safePost(`/hermes/agent/{agent_id}/triggers`, {
                    parameters: { path: { agent_id: e } },
                    requestBody: { trigger: n.trigger },
                  })
                : await p.safePatch(`/hermes/agent/{agent_id}/triggers/{trigger_id}`, {
                    parameters: { path: { agent_id: e, trigger_id: n.resource.id } },
                    requestBody: { trigger: n.trigger },
                  }),
              s(!0));
          } catch (e) {
            throw (s(!1), e);
          }
          await l(t.queryClient, [`workspace-agent`, `schedules`, n.accountId, e]);
        },
      }))));
  });
function Dt(e) {
  let t = (0, Mt.c)(12),
    { accountId: n, agentId: r, onClose: i, onCloseAutoFocus: a } = e,
    o = v(Tt, r),
    s;
  t[0] !== o || t[1] !== i
    ? ((s = (e) => {
        !e && !o.isPending && i();
      }),
      (t[0] = o),
      (t[1] = i),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === a
    ? (c = t[4])
    : ((c = {
        onCloseAutoFocus: (e) => {
          a != null && (e.preventDefault(), a());
        },
      }),
      (t[3] = a),
      (t[4] = c));
  let l;
  t[5] !== n || t[6] !== r
    ? ((l = (0, $.jsx)(Ot, { accountId: n, agentId: r })), (t[5] = n), (t[6] = r), (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== s || t[9] !== c || t[10] !== l
      ? ((u = (0, $.jsx)(J, { open: !0, onOpenChange: s, contentProps: c, children: l })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Ot(e) {
  let t = (0, Mt.c)(89),
    { accountId: r, agentId: i } = e,
    a = n(me),
    o = ae(),
    { data: c, isPending: l, error: u, refetch: ee } = v(wt, i),
    { data: d } = v(ze, i),
    p = f(de).accountUserId,
    m = f(I) === !0,
    g = f(xe) === !0,
    _ = v(Tt, i),
    y = (0, Nt.useId)(),
    [ie, b] = (0, Nt.useState)(null),
    [se, x] = (0, Nt.useState)(null),
    [S, C] = (0, Nt.useState)(!1),
    [w, T] = (0, Nt.useState)(null),
    E;
  t[0] !== r || t[1] !== i || t[2] !== S
    ? ((E = Ve({ accountId: r, agentId: i, versionScope: `published`, enabled: S })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = S),
      (t[3] = E))
    : (E = t[3]);
  let { data: D, isFetching: O, error: k, refetch: A } = ce(E),
    fe;
  t[4] === D ? (fe = t[5]) : ((fe = D?.some(jt)), (t[4] = D), (t[5] = fe));
  let j = fe,
    M,
    N,
    P,
    F,
    L,
    R;
  if (
    t[6] !== r ||
    t[7] !== w ||
    t[8] !== i ||
    t[9] !== m ||
    t[10] !== g ||
    t[11] !== A ||
    t[12] !== O ||
    t[13] !== k ||
    t[14] !== S ||
    t[15] !== se ||
    t[16] !== d?.agent ||
    t[17] !== d?.latest_published_version ||
    t[18] !== o ||
    t[19] !== l ||
    t[20] !== u ||
    t[21] !== _ ||
    t[22] !== j ||
    t[23] !== D ||
    t[24] !== ee ||
    t[25] !== c ||
    t[26] !== y ||
    t[27] !== a ||
    t[28] !== ie ||
    t[29] !== p
  ) {
    R = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = c?.filter(At),
        n = e?.find((e) => {
          let { id: t } = e;
          return t === ie;
        });
      ((P = e?.find((e) => {
        let { id: t } = e;
        return t === se;
      })),
        (M = m && p != null && d?.latest_published_version != null));
      let f = st(d?.latest_published_version),
        te = [
          {
            id: `chatgpt`,
            label: o.formatMessage(nt.chatGptDestination),
            binding: { type: `chatgpt` },
          },
        ];
      g && d?.agent.creator_id === p && te.push(...f);
      let v;
      t[36] !== m || t[37] !== g || t[38] !== d?.agent.creator_id || t[39] !== p
        ? ((v = (e) =>
            ot({
              resource: e,
              userId: p,
              agentCreatorId: d?.agent.creator_id,
              canAccess: m,
              canShare: g,
            })),
          (t[36] = m),
          (t[37] = g),
          (t[38] = d?.agent.creator_id),
          (t[39] = p),
          (t[40] = v))
        : (v = t[40]);
      let ae = v,
        ce;
      (t[41] === o
        ? (ce = t[42])
        : ((ce = (e) =>
            T(
              (e instanceof Error ? e.message : null) ||
                o.formatMessage({
                  id: `workspaceAgents.schedules.actionError`,
                  defaultMessage: `Could not update the automation. Try again`,
                  description: `Error shown when changing an agent schedule fails`,
                }),
            )),
          (t[41] = o),
          (t[42] = ce)),
        (F = ce));
      let E;
      if (
        (t[43] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((E = () => {
              (b(null), C(!1), x(null), T(null));
            }),
            (t[43] = E))
          : (E = t[43]),
        (L = E),
        (N = e?.map((e) => {
          if (e.trigger.type !== `SCHEDULE`) return null;
          let t = e.trigger,
            { canEdit: n, canDelete: c } = ae(e),
            l = ut(t, o),
            u =
              t.channel_binding?.type === `slack`
                ? (ct(f, t.channel_binding)?.label ?? `#${t.channel_binding.channel_id}`)
                : o.formatMessage(nt.chatGptDestination);
          return (0, $.jsx)(
            ke,
            {
              ariaLabel: l,
              ariaDescribedBy: `${y}-${e.id}-details${t.enabled === !1 ? ` ${y}-${e.id}-paused` : ``}`,
              isSelected: ie === e.id,
              hasInteractiveContent: !0,
              onSelect: () => {
                ($e(a, i, {
                  actionType: Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_SELECT,
                  schedule: { scheduleTriggerId: e.id },
                }),
                  b(e.id),
                  T(null));
              },
              title: l,
              icon:
                t.channel_binding?.type === `slack`
                  ? (0, $.jsx)(ge, {
                      alt: ``,
                      knownAppId: `slack`,
                      size: 20,
                      fallback: (0, $.jsx)(Ce, {}),
                    })
                  : (0, $.jsx)(Ce, {}),
              titleAdornment:
                t.enabled === !1
                  ? (0, $.jsx)(`span`, {
                      id: `${y}-${e.id}-paused`,
                      children: (0, $.jsx)(_e, {
                        variant: `outline`,
                        children: (0, $.jsx)(s, {
                          id: `workspaceAgents.schedules.paused`,
                          defaultMessage: `Paused`,
                          description: `Status badge for a paused Workspace Agent automation`,
                        }),
                      }),
                    })
                  : null,
              secondLine: (0, $.jsx)(`div`, {
                id: `${y}-${e.id}-details`,
                className: `truncate`,
                children: t.instructions
                  ? (0, $.jsx)(s, {
                      id: `workspaceAgents.schedules.rowDescription`,
                      defaultMessage: `{destination} · {instructions}`,
                      description: `Destination and instructions beneath an agent automation's schedule`,
                      values: { destination: u, instructions: t.instructions },
                    })
                  : u,
              }),
              rightText: (0, $.jsx)(`div`, {
                className: `pointer-events-auto`,
                children: (0, $.jsxs)(re, {
                  align: `end`,
                  triggerButton: (0, $.jsx)(Ee, {
                    label: o.formatMessage({
                      id: `workspaceAgents.schedules.moreActions`,
                      defaultMessage: `Automation actions`,
                      description: `Accessible label for an automation's pause and delete menu`,
                    }),
                    disabled: _.isPending || (!n && !c),
                  }),
                  children: [
                    (0, $.jsx)(h.Item, {
                      LeftIcon: t.enabled === !1 ? ne : oe,
                      disabled: !n || _.isPending,
                      onSelect: () => {
                        (T(null),
                          _.mutate(
                            {
                              accountId: r,
                              resource: e,
                              trigger: { ...t, enabled: t.enabled === !1 },
                            },
                            { onError: F },
                          ));
                      },
                      children:
                        t.enabled === !1
                          ? (0, $.jsx)(s, {
                              id: `workspaceAgents.schedules.resume`,
                              defaultMessage: `Resume`,
                              description: `Resumes a paused Workspace Agent schedule`,
                            })
                          : (0, $.jsx)(s, {
                              id: `workspaceAgents.schedules.pause`,
                              defaultMessage: `Pause`,
                              description: `Pauses a Workspace Agent schedule`,
                            }),
                    }),
                    c
                      ? (0, $.jsx)(h.Item, {
                          LeftIcon: le,
                          disabled: _.isPending,
                          onSelect: () => {
                            (x(e.id), T(null));
                          },
                          children: (0, $.jsx)(s, {
                            id: `workspaceAgents.schedules.delete`,
                            defaultMessage: `Delete`,
                            description: `Deletes a Workspace Agent schedule after confirmation`,
                          }),
                        })
                      : null,
                  ],
                }),
              }),
            },
            e.id,
          );
        })),
        u != null)
      ) {
        let e;
        (t[44] === ee
          ? (e = t[45])
          : ((e = (0, $.jsx)(Ue, { onRetry: () => void ee() })), (t[44] = ee), (t[45] = e)),
          (N = e));
      } else if (l) {
        let e;
        (t[46] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Le, {
              children: (0, $.jsx)(s, {
                id: `workspaceAgents.schedules.loading`,
                defaultMessage: `Loading automations…`,
                description: `Loading state for an agent's schedules`,
              }),
            })),
            (t[46] = e))
          : (e = t[46]),
          (N = e));
      } else if (e?.length === 0) {
        let e;
        (t[47] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Le, {
              children: (0, $.jsx)(s, {
                id: `workspaceAgents.schedules.empty`,
                defaultMessage: `No automations yet`,
                description: `Empty state when an agent has no accessible scheduled runs`,
              }),
            })),
            (t[47] = e))
          : (e = t[47]),
          (N = e));
      }
      if (S || n?.trigger.type === `SCHEDULE`) {
        let e;
        (t[48] !== A || t[49] !== O || t[50] !== k || t[51] !== S || t[52] !== j || t[53] !== D
          ? ((e =
              S && (D == null || O || k != null || j)
                ? (0, $.jsx)(Te, {
                    type: k ? `error` : `normal`,
                    content: O
                      ? (0, $.jsx)(s, {
                          id: `workspaceAgents.schedules.checkingConnections`,
                          defaultMessage: `Checking app connections…`,
                          description: `Status while checking personal app connections before scheduling an agent`,
                        })
                      : (0, $.jsx)(s, {
                          id: `workspaceAgents.schedules.repairConnections`,
                          defaultMessage: `Review this agent's app connections in <link>ChatGPT settings</link>, then check again to continue`,
                          description: `Recovery instructions with a link to app connection settings before creating an automation`,
                          values: { link: kt },
                        }),
                    primaryCtaText: (0, $.jsx)(s, {
                      id: `workspaceAgents.schedules.checkConnections`,
                      defaultMessage: `Check again`,
                      description: `Rechecks the agent's app connections after the user repairs them`,
                    }),
                    isPrimaryCtaDisabled: O,
                    onPrimaryCtaClick: () => {
                      (T(null), A());
                    },
                  })
                : null),
            (t[48] = A),
            (t[49] = O),
            (t[50] = k),
            (t[51] = S),
            (t[52] = j),
            (t[53] = D),
            (t[54] = e))
          : (e = t[54]),
          (R = (0, $.jsx)(
            mt,
            {
              trigger: n?.trigger.type === `SCHEDULE` ? n.trigger : null,
              destinations: te,
              canEdit: n == null ? M : ae(n).canEdit,
              pending: _.isPending,
              saveDisabled: S && (O || D == null || k != null || j === !0),
              notice: e,
              onInteraction: (e) =>
                $e(a, i, { ...e, schedule: { ...e.schedule, scheduleTriggerId: n?.id } }),
              error: w,
              onClose: L,
              onSave: (e) => {
                (T(null),
                  _.mutate(
                    { accountId: r, resource: n, trigger: e },
                    { onSuccess: L, onError: F },
                  ));
              },
            },
            n?.id ?? `new`,
          )));
        break bb0;
      }
    }
    ((t[6] = r),
      (t[7] = w),
      (t[8] = i),
      (t[9] = m),
      (t[10] = g),
      (t[11] = A),
      (t[12] = O),
      (t[13] = k),
      (t[14] = S),
      (t[15] = se),
      (t[16] = d?.agent),
      (t[17] = d?.latest_published_version),
      (t[18] = o),
      (t[19] = l),
      (t[20] = u),
      (t[21] = _),
      (t[22] = j),
      (t[23] = D),
      (t[24] = ee),
      (t[25] = c),
      (t[26] = y),
      (t[27] = a),
      (t[28] = ie),
      (t[29] = p),
      (t[30] = M),
      (t[31] = N),
      (t[32] = P),
      (t[33] = F),
      (t[34] = L),
      (t[35] = R));
  } else ((M = t[30]), (N = t[31]), (P = t[32]), (F = t[33]), (L = t[34]), (R = t[35]));
  if (R !== Symbol.for(`react.early_return_sentinel`)) return R;
  let z;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(pe, {
        children: (0, $.jsx)(ue, {
          title: (0, $.jsx)(be, {
            children: (0, $.jsx)(s, {
              id: `workspaceAgents.schedules.title`,
              defaultMessage: `Automations`,
              description: `Title of the list of a Workspace Agent's scheduled runs`,
            }),
          }),
        }),
      })),
      (t[55] = z))
    : (z = t[55]);
  let B;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(he, {})), (t[56] = B))
    : (B = t[56]);
  let V = !M || _.isPending,
    H;
  t[57] !== i || t[58] !== a
    ? ((H = () => {
        ($e(a, i, { actionType: Z.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_ADD }),
          C(!0),
          T(null));
      }),
      (t[57] = i),
      (t[58] = a),
      (t[59] = H))
    : (H = t[59]);
  let ve;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(s, {
        id: `workspaceAgents.schedules.add`,
        defaultMessage: `Add automation`,
        description: `Opens the form to schedule a Workspace Agent`,
      })),
      (t[60] = ve))
    : (ve = t[60]);
  let U;
  t[61] !== V || t[62] !== H
    ? ((U = (0, $.jsx)(ke, { icon: B, isSelected: !1, isDisabled: V, onSelect: H, title: ve })),
      (t[61] = V),
      (t[62] = H),
      (t[63] = U))
    : (U = t[63]);
  let W;
  t[64] === w
    ? (W = t[65])
    : ((W = w == null ? null : (0, $.jsx)(Te, { type: `error`, content: w })),
      (t[64] = w),
      (t[65] = W));
  let G;
  t[66] === N
    ? (G = t[67])
    : ((G = (0, $.jsx)(`div`, { className: `flex flex-col`, children: N })),
      (t[66] = N),
      (t[67] = G));
  let K = P != null,
    ye = _.isPending,
    q;
  t[68] === o
    ? (q = t[69])
    : ((q = o.formatMessage({
        id: `workspaceAgents.schedules.automationName`,
        defaultMessage: `this automation`,
        description: `Name used when confirming deletion of an unnamed Workspace Agent schedule`,
      })),
      (t[68] = o),
      (t[69] = q));
  let J;
  t[70] === _.isPending
    ? (J = t[71])
    : ((J = () => {
        _.isPending || x(null);
      }),
      (t[70] = _.isPending),
      (t[71] = J));
  let Y;
  t[72] !== r || t[73] !== P || t[74] !== _ || t[75] !== F || t[76] !== L
    ? ((Y = () => {
        P == null ||
          _.isPending ||
          (T(null),
          _.mutate(
            { accountId: r, resource: P, delete: !0 },
            {
              onSuccess: L,
              onError: (e) => {
                (x(null), F(e));
              },
            },
          ));
      }),
      (t[72] = r),
      (t[73] = P),
      (t[74] = _),
      (t[75] = F),
      (t[76] = L),
      (t[77] = Y))
    : (Y = t[77]);
  let Se;
  t[78] !== _.isPending || t[79] !== K || t[80] !== q || t[81] !== J || t[82] !== Y
    ? ((Se = (0, $.jsx)(Fe, { open: K, isPending: ye, name: q, onCancel: J, onConfirm: Y })),
      (t[78] = _.isPending),
      (t[79] = K),
      (t[80] = q),
      (t[81] = J),
      (t[82] = Y),
      (t[83] = Se))
    : (Se = t[83]);
  let X;
  return (
    t[84] !== W || t[85] !== G || t[86] !== Se || t[87] !== U
      ? ((X = (0, $.jsxs)(te, {
          size: `viewport`,
          children: [
            z,
            (0, $.jsx)(pe, {
              children: (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [U, W, G, Se],
              }),
            }),
          ],
        })),
        (t[84] = W),
        (t[85] = G),
        (t[86] = Se),
        (t[87] = U),
        (t[88] = X))
      : (X = t[88]),
    X
  );
}
function kt(e) {
  return (0, $.jsx)(H, {
    href: `https://chatgpt.com/#settings/Connectors`,
    initiator: `external_link`,
    openTarget: `external-browser`,
    children: e,
  });
}
function At(e) {
  return e.trigger.type === `SCHEDULE`;
}
function jt(e) {
  return (
    e.auth_type === `PERSONAL` &&
    [`missing_link`, `missing_actions`, `needs_reconnect`, `scope_upgrade_required`].includes(
      e.link_status,
    )
  );
}
var Mt, Nt, $;
e(() => {
  ((Mt = U()),
    Ze(),
    q(),
    ie(),
    (Nt = t(i(), 1)),
    C(),
    se(),
    Pe(),
    K(),
    M(),
    a(),
    Ie(),
    z(),
    F(),
    j(),
    B(),
    k(),
    De(),
    Oe(),
    G(),
    L(),
    Re(),
    He(),
    Be(),
    tt(),
    Ct(),
    rt(),
    pt(),
    Et(),
    ($ = R()));
})();
export { Dt as WorkspaceAgentSchedulesDialog };
//# sourceMappingURL=dialog-fe98a7d2ac27.js.map
