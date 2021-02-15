(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1398:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),c=a.n(i),l=a(85),d=c.a.bind({"clinical-lowlight-theme":"marked-module__clinical-lowlight-theme___1sfwg","orion-fusion-theme":"marked-module__orion-fusion-theme___2aD2P",marked:"marked-module__marked___1RgKN"});t.default=function(){var e=r.a.useContext(l.ThemeContext);return r.a.createElement("div",{dir:"ltr",className:d("marked",e.className),dangerouslySetInnerHTML:{__html:'\x3c!-- Logo --\x3e\n<p align="center">\n  <img alt="Terra Logo" height="128" width="128" src="https://github.com/cerner/terra-clinical/raw/main/terra.png" />\n</p>\n\n\x3c!-- Name --\x3e\n<h1 align="center">\n  Terra Clinical\n</h1>\n\n<p><a href="http://engineering.cerner.com/2014/01/cerner-and-open-source/"><img src="https://badgen.net/badge/Cerner/OSS/blue" alt="Cerner OSS"></a>\n<a href="https://github.com/cerner/terra-clinical/blob/main/LICENSE"><img src="https://badgen.net/github/license/cerner/terra-clinical" alt="License"></a>\n<a href="https://travis-ci.com/cerner/terra-clinical"><img src="https://badgen.net/travis/cerner/terra-clinical" alt="Build Status"></a>\n<a href="https://david-dm.org/cerner/terra-clinical?type=dev"><img src="https://badgen.net/david/dev/cerner/terra-clinical" alt="devDependencies status"></a>\n<a href="https://lerna.js.org/"><img src="https://badgen.net/badge/maintained%20with/lerna/cc00ff" alt="lerna"></a></p>\n<ul>\n<li><a href="https://github.com/cerner/terra-ui/blob/main/src/terra-dev-site/about/ComponentStandards.e.contributing.md#cross-browser-support">Supported Browsers</a></li>\n<li><a href="#packages">Packages</a><ul>\n<li><a href="#status">Status</a></li>\n</ul>\n</li>\n<li><a href="#internationalization-i18n">Internationalization (I18n)</a></li>\n<li><a href="#contributing">Contributing</a></li>\n<li><a href="#local-development">Local Development</a></li>\n<li><a href="#license">LICENSE</a></li>\n</ul>\n<h2 id="packages">\n  Packages\n</h2>\n\n<h3 id="status">\n  Status\n</h3>\n\n<p><img src="https://badgen.net/badge/status/Stable/green" alt="Stable">\n<img src="https://badgen.net/badge/status/Beta/orange" alt="Beta">\n<img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></p>\n\x3c!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST) --\x3e\n<table>\n<thead>\n<tr>\n<th>Terra Package</th>\n<th>Version</th>\n<th>Status</th>\n<th>Dependencies</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><a href="https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-data-grid">terra-clinical-data-grid</a></td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-data-grid"><img src="https://badgen.net/npm/v/terra-clinical-data-grid" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-data-grid"><img src="https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-data-grid" alt="terra-clinical-data-grid"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-detail-view">terra-clinical-detail-view</a></td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-detail-view"><img src="https://badgen.net/npm/v/terra-clinical-detail-view" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-detail-view"><img src="https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-detail-view" alt="terra-clinical-detail-view"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-header">terra-clinical-header</a></td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-header"><img src="https://badgen.net/npm/v/terra-clinical-header" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-header"><img src="https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-header" alt="terra-clinical-header"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-collection">terra-clinical-item-collection</a></td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-item-collection"><img src="https://badgen.net/npm/v/terra-clinical-item-collection" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-collection"><img src="https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-collection" alt="terra-clinical-item-collection"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-display">terra-clinical-item-display</a></td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-item-display"><img src="https://badgen.net/npm/v/terra-clinical-item-display" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-display"><img src="https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-display" alt="terra-clinical-item-display"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-view">terra-clinical-item-view</a></td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-item-view"><img src="https://badgen.net/npm/v/terra-clinical-item-view" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-view"><img src="https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-view" alt="terra-clinical-item-view"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-label-value-view">terra-clinical-label-value-view</a></td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-label-value-view"><img src="https://badgen.net/npm/v/terra-clinical-label-value-view" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-label-value-view"><img src="https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-label-value-view" alt="terra-clinical-label-value-view"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-onset-picker">terra-clinical-onset-picker</a></td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-onset-picker"><img src="https://badgen.net/npm/v/terra-clinical-onset-picker" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-onset-picker"><img src="https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-onset-picker" alt="terra-clinical-onset-picker"></a></td>\n</tr>\n<tr>\n<td>\x3c!-- AUTO-GENERATED-CONTENT:END *--\x3e</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n<h3 id="deprecated"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#deprecated"><span class="icon icon-link" /></a>Deprecated</h3><table>\n<thead>\n<tr>\n<th>Terra Package</th>\n<th>Version</th>\n<th>Status</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>terra-clinical-action-header</td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-action-header"><img src="https://badgen.net/npm/v/terra-clinical-action-header" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n</tr>\n<tr>\n<td>terra-clinical-app-delegate</td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-app-delegate"><img src="https://badgen.net/npm/v/terra-clinical-app-delegate" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n</tr>\n<tr>\n<td>terra-clinical-error-view</td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-error-view"><img src="https://badgen.net/npm/v/terra-clinical-error-view" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n</tr>\n<tr>\n<td>terra-clinical-modal-manager</td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-modal-manager"><img src="https://badgen.net/npm/v/terra-clinical-modal-manager" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n</tr>\n<tr>\n<td>terra-clinical-no-data-view</td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-no-data-view"><img src="https://badgen.net/npm/v/terra-clinical-no-data-view" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n</tr>\n<tr>\n<td>terra-clinical-site</td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-site"><img src="https://badgen.net/npm/v/terra-clinical-site" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n</tr>\n<tr>\n<td>terra-clinical-slide-group</td>\n<td><a href="https://www.npmjs.org/package/terra-clinical-slide-group"><img src="https://badgen.net/npm/v/terra-clinical-slide-group" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n</tr>\n</tbody></table>\n<h2 id="internationalization-i18n">\n  Internationalization (I18n)\n</h2>\n\n<p>Please review <a href="https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization">Terra&#39;s Internationalization documentation</a> for more information. Included are directions on consumption and how internationalization is setup.</p>\n<h2 id="contributing">\n  Contributing\n</h2>\n\n<p>Please read through our <a href="/terra-clinical/CONTRIBUTING.md">contributing guidelines</a>. Included are directions for issue reporting and pull requests.</p>\n<h2 id="local-development">\n  Local Development\n</h2>\n\n<ol>\n<li>Install docker <a href="https://www.docker.com/">https://www.docker.com/</a> to run browser tests.</li>\n<li>Install dependencies and run tests.<pre><code class="codeblock language-sh">npm install\nnpm run test</code></pre>\n</li>\n</ol>\n<h2 id="license">\n  LICENSE\n</h2>\n\n<p>Copyright 2017 - 2020 Cerner Innovation, Inc.</p>\n<p>Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); you may not use this file except in compliance with the License. You may obtain a copy of the License at</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a></p>\n<p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>\n'}})}}}]);