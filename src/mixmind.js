/** load all css style scss files. */
require('../res/css/main.scss');
require('../res/css/body.scss');

const Topic = require('./models/topic'),
      TopicView = require('./views/topicview'),
      testjson = require('../res/testjson');

var MixMind = {
    init : function() {
        console.log(testjson.getText);
    }
}

MixMind.init();
