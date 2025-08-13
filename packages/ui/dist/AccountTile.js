import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var AccountTile = function (_a) {
    var name = _a.name, balance = _a.balance, _b = _a.currency, currency = _b === void 0 ? 'USD' : _b, onClick = _a.onClick;
    return (_jsxs("div", { className: "p-4 rounded-md bg-surface-2 shadow-sm hover:shadow-md cursor-pointer", onClick: onClick, children: [_jsx("div", { className: "text-sm text-muted", children: name }), _jsx("div", { className: "mt-2 text-2xl font-semibold text-primary", children: new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(balance) })] }));
};
