import stripComments from 'strip-json-comments'

module.exports = function(source) {
    // make the loader cacheable
    this.cacheable();
    console.log('source', source);
    console.log('strippedSouce', stripComments(source));
    return stripComments(source);
}