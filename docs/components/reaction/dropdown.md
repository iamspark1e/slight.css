# 下拉菜单(Dropdown)

## 依赖

## 兼容性

## 基础用法

```html
<div class="slightcss slightcss_container slightcss_dropdown">
    <input type="checkbox" class="slightcss_dropdown_state" id="encryptShowDialog" />
    <label class="slightcss_dropdown_button" for="encryptShowDialog">
    	<!-- Customize -->
    	<span>菜单</span><i class="slightcss_icon slightcss_icon__arrow"></i>
    </label>
    <div class="slightcss_dropdown_menu" data-direction="down">
    	<!-- Customize -->
        <div class="content" data-condition="1">
            <div style="width: 200px;height: 300px;background-color: blue;">1</div>
        </div>
    </div>
</div>
```

<iframe style="width:100%;min-height:300px;" src="/_demo/dropdown/basic.html"></iframe>

## 控制Menu容器方向

```html
<div style="height: 300px;"></div>
<div class="slightcss slightcss_container slightcss_dropdown">
    <input type="checkbox" class="slightcss_dropdown_state" id="encryptShowDialog" />
    <label class="slightcss_dropdown_button" for="encryptShowDialog">
    	<!-- Customize -->
    	<span>菜单</span><i class="slightcss_icon slightcss_icon__arrow"></i>
    </label>
    <div class="slightcss_dropdown_menu" data-direction="up">
    	<!-- Customize -->
        <div class="content" data-condition="1">
            <div style="width: 200px;height: 300px;background-color: blue;">1</div>
        </div>
    </div>
</div>
```

<iframe style="width:100%;min-height:300px;" src="/_demo/dropdown/direction.html"></iframe>