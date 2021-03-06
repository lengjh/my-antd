"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils = __importStar(require("./utils"));
exports.utils = utils;
const antd_1 = require("antd");
exports.Form = antd_1.Form;
const MyAntd = __importStar(require("../MyAntd"));
exports.MyAntd = MyAntd;
const { Input, InputGroup, InputNumber, InputNumberRange, TextArea, Radio, Select, DatePicker, Reset, Upload, Switch, Button, FormItem, MyEmpty, MyCard, MyModal, MyInfo, MyUpload, MyTable, MyPagination, message, DisabledSwitch, Delete, NotDelete, Block, } = MyAntd;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.InputNumber = InputNumber;
exports.InputNumberRange = InputNumberRange;
exports.TextArea = TextArea;
exports.Radio = Radio;
exports.Select = Select;
exports.DatePicker = DatePicker;
exports.Reset = Reset;
exports.Upload = Upload;
exports.Switch = Switch;
exports.Button = Button;
exports.FormItem = FormItem;
exports.MyEmpty = MyEmpty;
exports.MyCard = MyCard;
exports.MyModal = MyModal;
exports.MyInfo = MyInfo;
exports.MyUpload = MyUpload;
exports.MyTable = MyTable;
exports.MyPagination = MyPagination;
exports.message = message;
exports.DisabledSwitch = DisabledSwitch;
exports.Delete = Delete;
exports.NotDelete = NotDelete;
exports.Block = Block;
exports.default = MyAntd;
