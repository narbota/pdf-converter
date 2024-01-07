const pdf = require('html-pdf');
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World';
    const html = '<html><body><h1>Hello, ' + subject + '</h1></body></html>';

    pdf.create(html).toBuffer((err, buffer) => {
      if (err) {
        return { statusCode: 500, body: err.toString() };
      }

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="output.pdf"',
        },
        body: buffer.toString('base64'),
        isBase64Encoded: true,
      };
    });
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
