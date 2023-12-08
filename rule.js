module.exports = {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'Ensure all form elements have a data-testid attribute',
      },
    },
    create: function (context) {
      function checkElement(node, elementName) {
        if (!node.attributes.some(attr => attr.type === 'JSXAttribute' && attr.name.name === 'data-testid')) {
          context.report({
            node,
            message: `${elementName} elements should have a data-testid attribute`,
          });
        }
      }
  
      return {
        JSXOpeningElement(node) {
          const elementName = node.name.name;
          if (['input', 'button', 'select', 'radio'].includes(elementName)) {
            checkElement(node, elementName);
          }
        },
      };
    },
  };
  