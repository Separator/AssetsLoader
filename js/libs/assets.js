/**
 * Created with JetBrains WebStorm.
 * User: Максим
 * Date: 08.07.14
 * Time: 21:14
 * To change this template use File | Settings | File Templates.
 * Required: jquery, underscore
 */

function Assets(options) {
    var defaultSettings = {
        "ajax":                 {
            "async":    false,
            "cache":    false,
            "dataType": "json",
            "type":     "POST",
            "timeout":  10000
        },
        "paths": {
            "assetsDirectory":  "assets",
            "catalogFile":      "catalog.json",
            "descriptionFile":  "description.json",
            "imagesDirectory":  "images"
        },

        "phrases": {
            "load_begin":   "Начало загрузки актива",
            "load_end":     "Окончание загрузки раздела актива",
            "load_error":   "Ошибка загрузки актива"
        },

        "downloadList": null,
        "progress": 0,
        "loadStep": 0,
        "loadedItems":  null,
        "loadedImagesItems": null,


        "statusHandler":            function(message) {},
        "progressHandler":          function(progress) {},
        "loadFailHandler":          function() {},
        "itemHandlers":             {},





        "animationsDir":            "assets/animations",
        "unitsDir":                 "assets/units",
        "assetsCatalog":            "catalog.json",
        "assetDescription":         "description.json",

        "animationsList":           null,
        "animationsListFinished":   null,
        "imagesList":               null,
        "animationsLoaded":         function (animations) {},

        "unitsList":                null,
        "unitsLoaded":              function (units) {}
    };

    /**
     * Получение анимации
     * @param dir
     * @param catalog
     * @return {Boolean}
     */
    /*this.animationLoad = function(dir, catalog) {
        var filePath = dir + '/' + catalog;
        var result   = false;
        $.ajax(
            $.extend(
                true,
                _.clone(this['ajax']),
                {
                    "context":  this,
                    "url":      filePath,
                    "success":  function(data) {
                        var that = this;
                        // получаем список анимаций:
                        var animationsList = data['assets'];
                        // вытаскиваем детальную информацию:
                        var assets ={};
                        for (var i = 0; i < animationsList.length; i++) {
                            var path = dir + '/' + animationsList[i] + '/' + this['assetDescription'];
                            $.ajax(
                                $.extend(
                                    true,
                                    _.clone(this['ajax']),
                                    {
                                        "url":  path,
                                        "success": function(data) {
                                            assets[animationsList[i]] = data;
                                        }
                                    }
                                )
                            );
                        };
                        if (_.size(assets)) {
                            // дополняем список активов:
                            if (this['animationsList']) {
                                $.extend(true, this['animationsList'], assets);
                            } else {
                                this['animationsList'] = assets;
                            };
                            // начинаем загрузку изображений:
                            var imagesList  = this['imagesList'] || {};
                            var imagesCount = 0;
                            var loadedImagesCount = 0;
                            // считаем кол-во изображений для загрузки:
                            for (var assetName in assets) {
                                for (var animationName in assets[assetName]) {
                                    imagesCount += assets[assetName][animationName]["frames"].length;
                                };
                            };
                            // подгружаем изображения:
                            for (var assetName in assets) {
                                if (!(assetName in imagesList)) {
                                    imagesList[assetName] = {};
                                };
                                var asset = assets[assetName];
                                // вытаскиваем имена файлов изображений:
                                for (var animationName in asset) {
                                    var frames = asset[animationName]["frames"];
                                    for (var i = 0; i < frames.length; i++) {
                                        var imgName = frames[i]["i"];
                                        imagesList[assetName][imgName] = new Image();
                                        imagesList[assetName][imgName].onload = function() {
                                            loadedImagesCount++;
                                            if (loadedImagesCount == imagesCount) {
                                                if (!that['imagesList']) {
                                                    that['imagesList'] = imagesList;
                                                };
                                                that.animationProcess();
                                                if (that['animationsLoaded']) {
                                                    that['animationsLoaded'](that['animationsListFinished']);
                                                };
                                            };
                                        };
                                        imagesList[assetName][imgName].src=this['animationsDir']+'/'+assetName+'/images/'+imgName;
                                    };
                                };
                            };
                            result = true;
                        } else {
                            result = false;
                        };
                    }
                }
            )
        );
        return result;
    };*/
    /**
     * Обработка полученных активов
     * @param animationsList
     * @return {*}
     */
    /*this.animationProcess = function(animationsList) {
        animationsList = animationsList || this['animationsList'];
        if (!animationsList) {
            return false;
        };
        var result = {};
        for (var asset in animationsList) {
            result[asset] = {};
            for (var animation in animationsList[asset]) {
                var frames = animationsList[asset][animation]["frames"];
                var processedFrames = [];
                var duration = 0;
                var currentSecond = 0;
                for (var i = 0; i < frames.length; i++) {
                    duration += frames[i]['t'];
                    processedFrames.push({
                        "begin":    currentSecond,
                        "end":      currentSecond + frames[i]['t'],
                        "img":      this['imagesList'][asset][frames[i]['i']]
                    });
                    currentSecond += frames[i]['t'];
                };
                result[asset][animation] = {
                    "duration": duration,
                    "end":      animationsList[asset][animation]["end"],
                    "frames":   processedFrames
                };
            };
        };
        this['animationsListFinished'] = result;
        return result;
    };*/
    /**
     * Получить обработанные активы анимации
     * @return {Object|Boolean}
     */
    /*this.getAnimationAssets = function(animationObject, animation) {
        var assets = this['animationsListFinished'];
        if (assets) {
            if (animationObject) {
                if (assets[animationObject] && assets[animationObject][animation]) {
                    return assets[animationObject][animation];
                } else {
                    return false;
                };
            } else {
                return assets;
            };

        } else {
            return false;
        };
    };*/


    /**
     * Получение юнитов
     * @param dir
     * @param catalog
     * @return {Boolean}
     */
    /*this.unitLoad = function(dir, catalog) {
        var filePath = dir + '/' + catalog;
        var result   = false;
        $.ajax(
            $.extend(
                true,
                _.clone(this['ajax']),
                {
                    "context":  this,
                    "url":      filePath,
                    "success":  function(data) {
                        var that = this;
                        // получаем список анимаций:
                        var unitsList = data['units'];
                        // вытаскиваем детальную информацию:
                        var units ={};
                        for (var i = 0; i < unitsList.length; i++) {
                            var path = dir + '/' + unitsList[i] + '/' + this['assetDescription'];
                            $.ajax(
                                $.extend(
                                    true,
                                    _.clone(this['ajax']),
                                    {
                                        "url":  path,
                                        "success": function(data) {
                                            units[unitsList[i]] = data;
                                        }
                                    }
                                )
                            );
                        };
                        if (_.size(units)) {
                            // дополняем список активов:
                            if (this['unitsList']) {
                                $.extend(true, this['unitsList'], units);
                            } else {
                                this['unitsList'] = units;
                            };
                            if (this['unitsLoaded']) {
                                this['unitsLoaded'](this['unitsList']);
                            };
                            result = this['unitsList'];
                        } else {
                            result = false;
                        };
                    }
                }
            )
        );
        return result;
    };*/

    this.request = function(url) {
        var result = false;
        $.ajax(
            $.extend(
                true,
                _.clone(this['ajax']),
                {
                    "url":  url
                },
                {
                    "success":  function(data)  {result = data;}/*,
                    "error":    function(e)     {result = e}*/
                }
            )
        );
        return result;
    };



    this.loadItem = function(itemName, item) {
        var phrases = this['phrases'];
        if (this['statusHandler']) {
            this.statusHandler(phrases['load_begin'] + ' "' + item['description'] + '"');
        };
        var itemData = $.ajax(
            $.extend(
                true,
                _.clone(this['ajax']),
                {
                    "async":    true,
                    "context":  this,
                    "url":      this['paths']['assetsDirectory'] + '/' + itemName + '/' + this['paths']['catalogFile'],
                    "success":  function(itemData) {
                        var that = this;
                        if (!this['loadedItems']) {
                            this['loadedItems'] = {};
                        };
                        this['loadedItems'][itemName] = {};

                        switch (item['type']) {
                            case "hash":
                                var hasImages = false;
                                var imagesNum = 0;
                                for (var unitName in itemData) {
                                    var unitOptions = this.request(
                                        this['paths']['assetsDirectory']+'/'+itemName+'/'+unitName+'/'+this['paths']['descriptionFile']
                                    );
                                    if (unitOptions) {
                                        this['loadedItems'][itemName][unitName] = unitOptions;
                                        if ("images" in unitOptions) {
                                            if (!hasImages) {
                                                hasImages = {};
                                            };
                                            hasImages[unitName] = unitOptions['images'];
                                            imagesNum += _.size(unitOptions['images']);
                                        };
                                    } else {
                                        this.loadFailHandler(phrases['load_error'] + ' "' + itemName + '->' + unitName + '"');
                                    };
                                };
                                if (imagesNum) {
                                    // создаём хранилище для картинок:
                                    if (!this['loadedImagesItems']) {
                                        this['loadedImagesItems'] = {};
                                    };
                                    this['loadedImagesItems'][itemName] = {};
                                    var loadedImagesNum = 0;
                                    for (var unitName in hasImages) {
                                        this['loadedImagesItems'][itemName][unitName] = {};
                                        var unitImages = hasImages[unitName];
                                        for (var imageName in unitImages) {
                                            (function() {
                                                var imageSrc = ''
                                                var imageName = imageName;
                                                var imageObject = new Image();
                                                imageObject.onload = function() {
                                                    loadedImagesNum++;
                                                    that['loadedImagesItems'][itemName][unitName][imageName] = this;
                                                    if (loadedImagesNum == imagesNum) {
                                                        // обработка загрузки:
                                                        that.setProgress(that['progress'] + that['loadStep']);
                                                        if (that['itemHandlers'][itemName]) {
                                                            that['itemHandlers'][itemName](that['loadedItems'][itemName]);
                                                        };
                                                    };
                                                };
                                                imageObject.onerror = function() {
                                                    loadedImagesNum++;
                                                    that.loadFailHandler(phrases['load_error'] + ' "' + imageName + '->' + imageSrc + '"');
                                                    if (loadedImagesNum == imagesNum) {
                                                        // обработка загрузки:
                                                        that.setProgress(that['progress'] + that['loadStep']);
                                                        if (that['itemHandlers'][itemName]) {
                                                            that['itemHandlers'][itemName](that['loadedItems'][itemName]);
                                                        };
                                                    };
                                                }
                                            })();
                                        };
                                    };
                                } else {
                                    // обработка загрузки:
                                    this.setProgress(this['progress'] + this['loadStep']);
                                    if (this['itemHandlers'][itemName]) {
                                        this['itemHandlers'][itemName](this['loadedItems'][itemName]);
                                    };
                                };
                                break;
                        };
                    },
                    "error":    function(e) {
                        this.loadFailHandler(phrases['load_error'] + ' "' + itemName + '"');
                    }
                }
            )
        );
        return true;
    };


    /**
     * Установка шага загрузки
     * @param value
     */
    this.setStep = function(value) {
        this['loadStep'] = value;
    };
    /**
     * Установка текущего процента загрузки активов
     * @param value
     */
    this.setProgress = function(value) {
        if (value <   0) value = 0;
        if (value > 100) value = 100;
        this['progress'] = value;
        if (this['progressHandler']) {
            this.progressHandler(this['progress']);
        };
    };
    /**
     * Загрузка активов
     * @param loadList
     * @return {Boolean}
     */
    this.load = function(loadList) {
        if (!_.size(loadList)) {
            return false;
        };
        this.setProgress(0);
        this.setStep(100 / _.size(loadList));
        // начинаем загрузку:
        for (var itemName in loadList) {
            this.loadItem(itemName, loadList[itemName]);
        };
        return true;
    };
    /**
     * Инициализация
     * @param options
     * @return {Boolean}
     */
    this.init = function(options) {
        // подгребаем значения по умолчанию:
        $.extend(true, this, _.clone(defaultSettings), options);
        // вытаскиваем список загружаемых активов:
        var downloadList = this['downloadList'];
        if (!downloadList) {
            downloadList = this.request(this['paths']['assetsDirectory'] + '/' + this['paths']['catalogFile']);
            if (!downloadList) {
                return false;
            };
            this['downloadList'] = downloadList;
        };
        // загрузаем активы:
        this.load(downloadList);
        return true;
    };

    // Вызов инициализации:
    this.init(options);
};