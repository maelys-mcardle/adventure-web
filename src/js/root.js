'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _navbar = require('./navbar.jsx');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_navbar2.default, { title: 'Adventure' }),
  _react2.default.createElement(
    'div',
    { 'class': 'container' },
    _react2.default.createElement(
      'div',
      { 'class': 'card top-spacer' },
      _react2.default.createElement(
        'div',
        { 'class': 'card-body' },
        'This is some text within a card body.',
        _react2.default.createElement(
          'div',
          { 'class': 'form-inline' },
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputPassword2', 'class': 'sr-only' },
              'Password'
            ),
            _react2.default.createElement('input', { type: 'text', 'class': 'form-control', id: 'inputPassword2',
              placeholder: 'Say what happens next!' })
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', 'class': 'btn btn-primary' },
            'Do it'
          )
        )
      )
    )
  )
), document.getElementById('root'));