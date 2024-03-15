// Регистрация хелпера для тегов <img> в Handlebars
const Handlebars = require('handlebars');

Handlebars.registerHelper('image', function(path, alt, options) {
    const imagePath = Handlebars.escapeExpression(path);
    const altText = Handlebars.escapeExpression(alt);
    const attributes = options.hash || {};
    let attributeString = '';

    // Формируем строку с дополнительными атрибутами
    for (const key in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, key)) {
            const value = Handlebars.escapeExpression(attributes[key]);
            attributeString += ` ${key}="${value}"`;
        }
    }

    // Формируем тег <img> с указанными атрибутами
    return new Handlebars.SafeString(`<img src="${imagePath}" alt="${altText}"${attributeString}>`);
});