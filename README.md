# The Grid Smart Paper (Repeatable)
'The Grid' is a smart paper featuring table of contents for end-users to navigate to desired sections quickly.

> Adopting this repeatable? [Please let us know](https://ibm.box.com/s/lgl8ho4mk875bm15rvuk8kq2l24qpz1r).

> 🔨 Web Builders: For this and all repeatables, cosmetic changes (typography, spacing, colors, etc.) are acceptable and encouraged! Repeatables are foundations, not prescriptions. Please work with your repeatable's designer to implement cosmetic enhancements. 

> 🎨 Designers: For this and all repeatables, cosmetic changes (typography, spacing, colors, etc.) are acceptable and encouraged! Please remember to adhere to our [Carbon for IBM.com](https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/) design guidance and have fun.

## Contributers
### A very special thanks to this repeatable's contributers
[Leticia Fontoura](https://github.ibm.com/L-Wolff)

## Updates
See the [changelog](https://github.ibm.com/IBMOriginals/smartpaper-the-grid/releases) for changes to this repeatable.


## What's supported out-of-the-box
- 6-9 sections
- JPG image or MP4 video as the background to the table of contents
- "Back to table of contents" sticky bar
- Select Carbon for IBM.com components
- 1-3 "Next steps"
- Smart Size typography for fewer UI issues around text wrapping

## Do's
- Design and develop custom components and elements to best tell your story. Be sure any new components or elements adhere to [IBM's Design Language](https://www.ibm.com/design/language/), [IBM's Web Standards](https://www.ibm.com/standards/web/), and [IBM's Accessibility](https://www.ibm.com/able/).

## Dont's
- Never edit or customize the [IBM masthead](http://ibmdotcom-web-components.mybluemix.net/?path=/story/components-masthead--default) beyond its prescribed options.
- Never edit or customize the [IBM footer](http://ibmdotcom-web-components.mybluemix.net/?path=/story/components-footer--default) beyond its prescribed options.
- Never change the behavior of the navigation mechanism. Navigation mechanisms are specific by design - consider a different smart paper should the one here not fit your needs.

## Future iterations
- Right-to-left formatting

## A note on localization
'The Grid', by design, has a constrained UI; please honor the specified character limits. Not honoring the character limits may result in a broken layout. Each localized smart paper using 'The Grid' should be checked at mobile, tablet, and desktop screen sizes; tweaks to font sizes may be required. 

For greater flexibility and fewer UI constraints, consider [Short & Sweet](https://github.ibm.com/IBMOriginals/smartpaper-short-sweet) or [Simple Scroll](https://github.ibm.com/IBMOriginals/smartpaper-simple-scroll).

## Content delivery
The following documents should be completed and delivered to you smart paper's web builder along with all images, video, or other media. Further instructions are inside the documents themselves.
<ul>
	<li><a href="https://github.ibm.com/IBMOriginals/smartpaper-the-grid/blob/master/docs/the-grid-smart-paper-publishing-information.docx?raw=true">Publishing Information</a></li>
	<li><a href="https://github.ibm.com/IBMOriginals/smartpaper-the-grid/blob/master/docs/the-grid-smart-paper-simulation.docx?raw=true">Simulation</a></li>
</ul>

## Demos
Find a demo of 'The Grid' here:
[https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/](https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/)

## Design
<details>
	<summary><strong>Image Cuts</strong></summary>
	<ul>
    <li>Images without transparency to be exported as JPG</li>
    <li>PNGs to be tightly cropped</li>
    <li>Images to be lossy compressed for web</li>
    <li><a href="https://tinypng.com/">TinyPNG</a> is a great tool for smart compression</li>
    <li>Naming convention:
      <ul>
        <li>Lowercase, no spaces in the filename</li>
        <li>Hyphens and underscores are OK!</li>
        <li>Append the image's width as a suffix, followed by a <code>w</code> and the file extension
          <ul>
            <li>Example: <code>filename-375w.jpg</code></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
	
</details>


<details>
	<summary><strong>Card Group - Image (Component)</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/cards-group--image.png">
	<ul>
		<li>SVG, JPG, PNG, or GIF</li>
		<li>4:3 aspect ratio</li>
		<li>Export in the following sizes using the naming convention <code>filename-1024w.jpg</code>:
			<ul>
				<li>375 x 281</li>
				<li>768 x 576</li>
			</ul>
		</li>
	</ul>
</details>
<details>
	<summary><strong>Feature Card (Component)</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/feature-card.png">
	<ul>
		<li>SVG, JPG, PNG, or GIF</li>
		<li>1:1 aspect ratio</li>
		<li>Export in the following sizes using the naming convention <code>filename-1024w.jpg</code>:
			<ul>
				<li>375 x 375</li>
				<li>768 x 768</li>
			</ul>
		</li>
	</ul>
</details>
<details>
	<summary><strong>Hero Image Background</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/hero.png">
	<ul>
		<li>JPG</li>
		<li>21:9 aspect ratio</li>
		<li>Export in the following sizes using the naming convention <code>filename-1024w.jpg</code>:
			<ul>
				<li>1024 x 438</li>
				<li>1366 x 585</li>
				<li>2560 x 1097</li>
			</ul>
		</li>
		<li>In your smart paper's <a href="https://github.ibm.com/IBMOriginals/smartpaper-the-grid/blob/master/docs/the-grid-smart-paper-publishing-information.docx?raw=true">Publishing Information</a>, update the <code>hero_background</code> field in by entering any one of the image cut's filename.</l1>
	</ul>
</details>
<details>
	<summary><strong>Hero Video Background</strong></summary>
	<ul>
		<li>MP4</li>
		<li>16:9 aspect ratio</li>
		<li>2MB max file size; compress MP4 as much as possible </li>
		<li>In your smart paper's <a href="https://github.ibm.com/IBMOriginals/smartpaper-the-grid/blob/master/docs/the-grid-smart-paper-publishing-information.docx?raw=true">Publishing Information</a>, update the <code>hero_background__video</code> field in by entering the MP4 filename and extension.</l1>
	</ul>
</details>
<details>
	<summary><strong>Image (Component)</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/image.png">
	<ul>
		<li>JPG</li>
		<li>Aspect ratio of your choice</li>
		<li>Export in the following widths using the naming convention <code>filename-1024w.jpg</code>:
			<ul>
				<li>768</li>
				<li>1024</li>
				<li>1366</li>
			</ul>
		</li>
	</ul>
</details>
<details>
	<summary><strong>Next Steps</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/next-steps.png">
	<ul>
		<li>JPG</li>
		<li>16:9 aspect ratio</li>
		<li>Export in the following sizes using the naming convention <code>filename-1024w.jpg</code>:
			<ul>
				<li>375 x 211</li>
				<li>768 x 432</li>
			</ul>
		</li>
		<li>In your smart paper's <a href="https://github.ibm.com/IBMOriginals/smartpaper-the-grid/blob/master/docs/the-grid-smart-paper-publishing-information.docx?raw=true">Publishing Information</a>, update the <code>next_step_01_thumbnail</code>, <code>next_step_02_thumbnail</code>, and <code>next_step_03_thumbnail</code> fields in by entering any one of the image cut's filename.</li>
	</ul>
</details>

## Tech
<details>
  <summary><strong>Prerequisites</strong></summary>
  <ul>
    <li>Terminal</li>
    <li>Text editor</li>
    <li><a href="https://nodejs.org/en/download/">Node Js v14.15.1 &  NPM 6.14.8</a></li>
  </ul>
  <p><em>If you run into permissions errors, see this <a href="https://www.youtube.com/watch?v=bxvybxYFq2o&feature=emb_title">video</a>.</em></p>
</details>
<details>
  <summary><strong>Technologies</strong></summary>
  <ul>
    <li><a href="https://github.com/11ty/eleventy">Eleventy</a></li>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
    <li><a href="https://mozilla.github.io/nunjucks/templating.html">Nunjucks</a></li>
    <li><a href="https://yaml.org/">Yaml</a></li>
    <li><a href="https://pages.github.ibm.com/digital-behavior/docs/index.html">DBDM Common Library</a></li>
    <li><a href="http://ibmdotcom-react.mybluemix.net/?path=/story/overview-getting-started--page">IBM.com Library React</a></li>
<li><a href="http://ibmdotcom-web-components.mybluemix.net/?path=/story/overview-getting-started--page">IBM.com Library Web Components</a></li>  
    <li><a href="https://the-carbon-components.netlify.app/">Carbon Components</a></li>
  </ul>
</details>
<details>
  <summary><strong>Getting started</strong></summary>
  <ol>
    <li>Create a new repository using <code>smartpaper-the-grid</code> as the template.</li>
    <li>Install dependencies by running <code>yarn install</code> after you <code>cd</code> into your repository's local folder.</li>
    <li>Launch your repository's local environment by running <code>yarn start</code>. Open the <code>localhost</code> URL printed in the terminal.</li>
    <li>When you're ready to stage or deploy, run <code>yarn build</code>. All the production-ready files and folders will be built out in the <code>dist</code> folder.</li>
  </ol>
</details>
<details>
	<summary><strong>Commands</strong></summary>
	<table>
		<tr>
			<td><strong>yarn install</strong></td>
			<td>Installs the repeatable dependencies</td>
		</tr>
		<tr>
			<td><strong>yarn start</strong></td>
			<td>Runs the repeatable locally on <code>http://localhost:8080</code></td>
		</tr>
		<tr>
			<td><strong>yarn build</strong></td>
			<td>Builds out the repeatable inside the <code>dist</code> folder</td>
		</tr>
	</table>
</details>
<details>
  <summary><strong>Populating the smart paper</strong></summary>
  <blockquote>
    <details>
      <summary><strong>Publishing Information</strong></summary>
      <p>Using the contents of the provided <a href="https://github.ibm.com/IBMOriginals/smartpaper-the-grid/blob/master/docs/the-grid-smart-paper-publishing-information.docx?raw=true">Publishing Information</a>, populate <code>src/data/editorial.yml</code>.</p>
      <ul>
        <li>Values containing a semicolon need to be wrapped in double quotes.</li>
        <li>Sometimes spaces in front of the value name will cause the build to fail.</li>
        <li>Enter the values for the following fields:
          <ul>
            <li><code>url</code></li>
            <li><code>owner</code></li>
            <li><code>country</code></li>
            <li><code>language</code></li>
          </ul>
        </li>
      </ul>
    </details>
    <details>
      <summary><strong>Simulation</strong></summary>
      <p>Using the contents of the provided <a href="https://github.ibm.com/IBMOriginals/smartpaper-the-grid/blob/master/docs/the-grid-smart-paper-simulation.docx?raw=true">Simulation</a>, populate each section's corresponding <code>.njk</code> file found in <code>src/includes/editorial/</code> with HTML and the smart paper components.</p>
    </details>
    <details>
      <summary><strong>Components</strong></summary>
      <p>Any Carbon component may be utilized in the smart paper - be ready to hydrate Carbon components with the smart paper's templating language and logic as needed.</p>
    </details>
    <details>
      <summary><strong>Media Management</strong></summary>
      <p>Move the provided images or MP4s into <code>src/images</code>.</p>
      <p>All required image cuts must be in <code>src/images</code> for the image to render.</p>
    </details>
  </blockquote>
</details>
<details>
  <summary><strong>Modifying the IBM masthead or footer</strong></summary>
  <ul>
    <li><strong>Modify using approved options only</strong></li>
    <li>
      To modify the IBM masthead, please reference <a href="http://ibmdotcom-web-components.mybluemix.net/?path=/story/components-masthead--default">Carbon for IBM.com Web Components</a>
    </li>
    <li>
      To modify the IBM footer, please reference <a href="http://ibmdotcom-web-components.mybluemix.net/?path=/story/components-footer--default">Carbon for IBM.com Web Components</a>
    </li>
  </ul>
</details>
<details>
  <summary><strong>Pre-build checks</strong></summary>
  <p>Before generating a build, check the following:</p>
  <ul>
    <li>
      Fields in <code>src/data/editorial.yml</code>:
      <ul>
        <li><code>url</code></li>
        <li><code>owner</code></li>
        <li><code>country</code></li>
        <li><code>language</code></li>
      </ul>
    </li>
    <li>Images have ALT text</li>
    <li>There is no text overlapping when resizing the screen. This sometimes happens in translated smart paper - adjust font sizes as needed</li>	  
	<li>Any unused CSS can be safely commented out in <code>src/styles/app--optional.scss</code></li>
	<li>Any unused Js can be safely commented out in <code>src/scripts/app--optional.js</code></li>
  </ul>
</details>

## Quick theming
### How to use theme your smart paper
1. Go to `src/data/editorial.yml`
2. Find the field `theme`
3. Enter `gray100` or `gray90` or `gray10` for Carbon's themes. Leave blank for Carbon's default White theme.

## Native smart paper components
### How to use native smart paper components for writers and designers
1. Copy the **Snippet** syntax
2. Paste into your Word document
3. Replace the contents of each line (the text between the double quotes) with your content; guidance for each line are in the snippet.

### How to use native smart paper components for web developers
1. Copy the **Snippet** syntax
2. Paste into the desired `.njk` file
3. Replace the contents of each line (the text between the double quotes) with your content; guidance for each line are in the snippet.

<details>
	<summary><strong>Accordion</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/accordion.png">
	<ul>
		<li>Supported fields: Heading & Copy</li>
		<li>HTML supported within the component</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ accordion (
		"Heading; required.",
		"Copy; required."
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ accordion (
		"Crazy in Love",
		"A song recorded by American singer Beyoncé featuring American rapper Jay-Z from Beyoncé's debut solo studio album Dangerously in Love (2003)."
	)}}
	</pre>
</details>

<details>
	<summary><strong>Callout Quote</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/callout-quote.png">
	<ul>
		<li>Support fields: Quotation marks (boolean value), Quote Copy, Citation Number, up 3 lines of additional copy, URL, URL Text and URL Icon type (blog, download, pdf, video, external and forward (default)).</li>
		<li>HTML supported within the component</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ calloutQuote (
		true (has quotation marks) or false (doesn't have quotation marks); required,
		"Quote Copy (excluding quotation marks); required.",
		"Citation Number; optional.",
		"Copy Line 1; optional.",
		"Copy Line 2; optional.",
		"Copy Line 3; optional.",
		"URL; optional",
		"URL Text; required for URL.",
		"URL Icon type; optional, forward is the default icon"
	)}}
	</pre>
	<p><strong>Sample</strong></p>
  	<pre>
	{{ calloutQuote (
		false,
    "This is an example of the quote style. The recommended character count maximum for quotes is 160 characters.",
    "1",
    "This is an example of the byline style",
    "This is an example of the source style",
    "This is an example of the source style",
    "https://ibm.com/",
    "This is an example of a link style",
		"forward"
	)}}
	</pre>
</details>

<details>
	<summary><strong>Cards Group - Default</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/cards-group--default.png">
	<ul>
		<li>Supported fields: Heading, Copy, URL for up to 5 cards plus Heading, URL for 1 CTA Card and URL Icon type (blog, download, pdf, video, external and forward (default)).</li>
		<li>HTML supported within the component</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ cardsGroupDefault (
		"Card 1 Heading; required.",
		"Card 1 Copy; optional.",
		"Card 1 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 2 Heading; required.",
		"Card 2 Copy; optional.",
		"Card 2 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 3 Heading; required.",
		"Card 3 Copy; optional.",
		"Card 3 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 4 Heading; required.",
		"Card 4 Copy; optional.",
		"Card 4 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 5 Heading; required.",
		"Card 5 Copy; optional.",
		"Card 5 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"CTA Card Heading; required.",
		"CTA Card URL; required."
		"URL Icon type; optional, forward is the default icon",
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ cardsGroupDefault (
		"Cards group heading 01",
		"Card 1 copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"https://ibm.com",
		"forward",
		<br>
		"Cards group heading 02",
		"Card 2 copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
		"https://placeholder.com",
		"external",
		<br>
		"Cards group heading 03",
		"Card 3 copy - Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
		"https://ibm.com",
		"forward"
	)}}
	</pre>
</details>

<details>
	<summary><strong>Cards Group - Image</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/cards-group--image.png">
	<ul>
		<li>Supported fields: Image File, Image ALT, Eyebrow, Heading, URL for up to 5 cards plus Heading, URL for 1 CTA Card and URL Icon type (blog, download, pdf, video, external and forward (default)).</li>
		<li>HTML supported within the component</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ cardsGroupImage (
		"Card 1 Image File (PNG or JPG), any-image-cut-filename.jpg; required.",
		"Card 1 Image ALT; required",
		"Card 1 Eyebrow; optional.",
		"Card 1 Heading; required.",
		"Card 1 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 2 Image File (PNG or JPG), any-image-cut-filename.jpg; required.",
		"Card 2 Image ALT; required",
		"Card 2 Eyebrow; optional.",
		"Card 2 Heading; required.",
		"Card 2 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 3 Image File (PNG or JPG), any-image-cut-filename.jpg; required.",
		"Card 3 Image ALT; required",
		"Card 3 Eyebrow; optional.",
		"Card 3 Heading; required.",
		"Card 3 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 4 Image File (PNG or JPG), any-image-cut-filename.jpg; required.",
		"Card 4 Image ALT; required",
		"Card 4 Eyebrow; optional.",
		"Card 4 Heading; required.",
		"Card 4 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 5 Image File (PNG or JPG), any-image-cut-filename.jpg; required.",
		"Card 5 Image ALT; required",
		"Card 5 Eyebrow; optional.",
		"Card 5 Heading; required.",
		"Card 5 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"CTA Card Heading; required.",
		"CTA Card URL; required.",
		"URL Icon type; optional, forward is the default icon",
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ cardsGroupImage (
		"4x3-375w.jpg",
		"Card 1 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading",
		"",
		"",
		<br>
		"4x3-375w.jpg",
		"Card 2 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading",
		"https://placeholder.com",
		"external",
		<br>
		"4x3-375w.jpg",
		"Card 3 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading",
		"",
		"",
		<br>
		"4x3-375w.jpg",
		"Card 1 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading",
		"https://ibm.com",
		"forward",
		<br>
		"4x3-375w.jpg",
		"Card 5 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading",
		"https://placeholder.com",
		"external",
		<br>
		"Cards group image heading",
		"https://ibm.com",
		"forward"	
	)}}
	</pre>
</details>

<details>
	<summary><strong>Cards Group - Pictogram</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/cards-group--pictogram.png">
	<ul>
		<li>Supported fields: SVG File, SVG ALT, Eyebrow, Heading, URL for up to 5 cards plus Heading, URL for 1 CTA Card and URL Icon type (blog, download, pdf, video, external and forward (default)).</li>
		<li>HTML supported within the component</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ cardsGroupPictogram (
		"Card 1 SVG File; required.",
		"Card 1 SVG ALT; required",
		"Card 1 Eyebrow; optional.",
		"Card 1 Heading; required.",
		"Card 1 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 2 SVG File; required.",
		"Card 2 SVG ALT; required",
		"Card 2 Eyebrow; optional.",
		"Card 2 Heading; required.",
		"Card 2 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 3 SVG File; required.",
		"Card 3 SVG ALT; required",
		"Card 3 Eyebrow; optional.",
		"Card 3 Heading; required.",
		"Card 3 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 4 SVG File; required.",
		"Card 4 SVG ALT; required",
		"Card 4 Eyebrow; optional.",
		"Card 4 Heading; required.",
		"Card 4 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"Card 5 SVG File; required.",
		"Card 5 SVG ALT; required",
		"Card 5 Eyebrow; optional.",
		"Card 5 Heading; required.",
		"Card 5 URL; optional.",
		"URL Icon type; optional, forward is the default icon",
		<br>
		"CTA Card Heading; required.",
		"CTA Card URL; required."
		"URL Icon type; optional, forward is the default icon",
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ cardsGroupPictogram (
		"automobile-2.svg",
		"Card 1 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading style",
		"https://placeholder.com",
		"external",
		<br>
		"cheese-2.svg",
		"Card 2 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading style",
		"https://ibm.com",
		"forward",
		<br>
		"medical--charts-2.svg",
		"Card 3 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading style",
		"",
		"",
		<br>
		"power-2.svg",
		"Card 1 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading style",
		"https://placeholder.com",
		"external",
		<br>
		"speedometer-2.svg",
		"Card 5 Image Alt",
		"Cards group image eyebrow style",
		"Cards group image heading style",
		"https://ibm.com",
		"forward",
		<br>
		"Cards group image heading style",
		"https://ibm.com",
		"forward"
	)}}
	</pre>
</details>

<details>
	<summary><strong>Chart Container</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/charts.png">
	<ul>
		<li>Supported fields: Container ID.</li>
		<li>HTML supported within the component</li>
		<li><strong>How to use? </strong> <a href="https://github.ibm.com/Diego-Marcuz/smartpaper-the-grid#carbon-charts-in-smart-papers">Check here</a></li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ chartContainer (
		"Container ID; required."
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ chartContainer (
		"my-bar-chart"
	)}}
	</pre>
</details>

<details>
	<summary><strong>Citation</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/citation.png">
	<ul>
		<li>Chicago style citation</li>
		<li>Supported fields: Citation Number, Author, Date, Title, URL, URL Icon Type (blog, download, pdf, video and external) and Publisher.</li>
		<li>HTML supported within the component</li>
		<li>Add empty strings ("") for internal links with no icon</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ citation (
		"Citation Number; required.",
		"Author(s); optional.",
		"Date of publication and/or data accessed; optional.",
		"Title; required included punctuation as needed.",
		"URL: optional.",
		"URL Icon Type; optional, forward is the default icon",
		"Publisher; required."
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ citation (
		"1",
		"Lorem Ipsum",
		"September 2040.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		"https://placeholder.com",
		"external",
		"Placeholder"
	)}}
	</pre>
</details>

<details>
	<summary><strong>Feature Card</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/feature-card.png">
	<ul>
		<li>Supported fields: Image File, Image ALT, Copy, Citation Number, URL and URL Icon type (blog, download, pdf, video, external and forward (default)).</li>
		<li>This component does not accept HTML such as lists or link in the copy.</li>
		<li>The Copy field has a 130 character count maximum.</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ featureCard (
		"Image File, any-image-cut-filename.jpg; required.",
		"Image ALT; required",
		"Copy; required. 130 character max.",
		"Citation Number; optional.",
		"URL; optional",
		"URL Icon Type; optional, forward is the default icon"
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ featureCard (
		"1x1-375w.jpg",
		"Image ALT",
		"Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit.",
		"1",
		"https://placeholder.com",
		"external""
	)}}
	</pre>
</details>

<details>
	<summary><strong>Image</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/image.png">
	<ul>
		<li>Supported fields: Image File, Image ALT, and Caption.</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ image (
		"Image File, any-image-cut-filename.jpg; required.",
		"Image ALT; required.",
		"Caption; optional."
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ image (
		"beyonce-1024px.jpg",
		"Black & white portrait of Beyoncé",
		"Photo Credit: Beyoncé"
	)}}
	</pre>
</details>

<details>
	<summary><strong>Standalone Link</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/standalone-link.png">
	<ul>
		<li>Supported fields: Copy, URL and URL Icon Type (blog, download, pdf, video, external and forward (default)).</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ standaloneLink (
		"Copy; required.",
		"URL; required.",
		"URL Icon Type; optional, forward is the default icon"
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ standaloneLink (
		"This is an external link style",
		"https://placeholder.com/",
		"external"
	)}}
	</pre>
</details>


<details>
	<summary><strong>Structured List</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/structured-list.png">
	<ul>
		<li>Supported fields: Heading 1, Heading 2, and up to 5 rows of content.</li>
		<li>HTML supported within the component</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ structuredList (
		"Heading 1; required;",
		"Heading 2; required;",
		<br>
		"Row 1 Left; required.",
		"Row 1 Right; required.",
		<br>
		"Row 2 Left; required.",
		"Row 2 Right; required.",
		<br>
		"Row 3 Left; required.",
		"Row 3 Right; required.",
		<br>
		"Row 4 Left; required.",
		"Row 4 Right; required.",
		<br>
		"Row 5 Left; required.",
		"Row 5 Right; required."
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ structuredList (
		"No.",
		"Beyoncé Facts",
		<br>
		"1",
		"Beyoncé’s favorite ice-cream is butter pecan.",
		<br>
		"2",
		"Beyoncé won more than 30 singing and dancing competitions as a child.",
		<br>
		"3",
		"The name Destiny’s Child comes from a passage in the Book of Isaiah, the first of the Latter Prophets in the Hebrew Bible.",
		<br>
		"4",
		"Beyoncé’s favorite singer is Stevie Wonder.",
		<br>
		"5",
		"Beyoncé enjoys swimming in the ocean."
	)}}
	</pre>
</details>

<details>
	<summary><strong>Pictogram Item</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/pictogram-item.png">
	<ul>
		<li>Supported fields: SVG File, SVG ALT, Heading, Copy, CTA Text, CTA URL and CTA Icon Type (blog, download, pdf, video, external and forward (default)).</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ pictogramItem (
		"SVG File; required.",
		"SVG ALT; required.",
		"Heading; optional.",
		"Copy; optional.",
		"CTA Text; optional.",
		"CTA URL; optional.",
		"CTA Icon Type; optional, forward is the default icon"
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ pictogramItem (
		'cloud--data-ops.svg',
		'Image ALT',
		'This is bold body style copy. ',
		'This is the table body style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan erat. Sed dignissim mi ultricies risus lacinia, eget dapibus ex commodo. Suspend',
		'This is CTA body (blue) style',
		'https://placeholder.com',
		"forward"
	)}}
	</pre>
</details>

<details>
	<summary><strong>Video</strong></summary>
	<img src="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/screengrabs/video.png">
	<ul>
		<li>Supported fields: Kaltura video ID and Caption (boolean value).</li>
	</ul>
	<p><strong>Snippet</strong></p>
	<pre>
	{{ video (
		"Kaltura video ID; required.",
		true (no video caption) or false (has mediacenter video caption -- default value); optional.
	)}}
	</pre>
	<p><strong>Sample</strong></p>
	<pre>
	{{ video (
		"0_uka1msg4",
		true
	)}}
	</pre>
</details>


## Carbon Charts in Smart Papers
<details>
	<summary><strong>Sample: Simple Bar Chart</strong></summary>
	<p>See <a href="https://carbon-design-system.github.io/carbon-charts/?path=/story/bar-vertical--simple-bar-discrete">Simple bar Chart</a></p>
	<p>If you want to use another chart you need to import a different chart and change the class name on the file which you will create your chart. Check the `src/assets/scripts/charts/section01-stacked`, you will see the import and the usage of class on the last lines. The each component name is indicated at each example starting from <a href="https://carbon-design-system.github.io/carbon-charts/?path=/story/bar-vertical--simple-bar-discrete">here</a>.</p>
</details>

<details>
	<summary><strong>Steps: Simple Bar Chart</strong></summary>
	<ol>
  		<li>Grab the <code>chartContainer</code> component and paste on desired section.
		<pre>{{chartContainer()}}</pre>
		</li>
		<li>Set a container ID to the component and it is required.
		<pre>{{chartContainer("my-bar-chart")}}</pre>
		</li>
		<li>Go to <code>src/assets/scripts/charts</code> and create a file that represents your chart (check the example <code>src/assets/scripts/charts/section01-stacked</code>).</li>
		<li>Within this file, Carbon requires a holder for your chart which will be linked to the container ID (<strong>my-bar-chart</strong>), that you defined on step 2.</li>
		<li>Now you need to set up your chart with your data. There are two required props: <code>data</code> and <code>options</code>.
		</li>
</details>
<details>
      <summary><strong>Data (Prop)</strong></summary>
      <p>This prop represents your dataset. The values are <code>group</code> and <code>value</code>. Example:</p>
	  <pre>
		[
			{
				"group": "Qty",
				"value": 65000
			},
			{
				"group": "More",
				"value": 29123
			},
			{
				"group": "Sold",
				"value": 35213
			},
			{
				"group": "Restocking",
				"value": 51213
			},
			{
				"group": "Misc",
				"value": 16932
			}
		]
	  </pre>
</details>
<details>
      <summary><strong>Options (Prop)</strong></summary>
      <p>This prop represents the chart's config.</p>
      <ul>
        <li>See all supported parameters <a href="https://carbon-design-system.github.io/carbon-charts/documentation/interfaces/_interfaces_charts_.barchartoptions.html">here</a>.</li>
        <li>In the sample above, we assigned:
          <ul>
            <li>Title: represents the title of your chart. It goes right up the chart. (Optional)</li>
            <li>Axes: here is the config to set how the data matches the axes on the chart. (Required)
              <ul>
                <li> On <a href="https://github.ibm.com/IBMOriginals/smartpaper-the-grid/blob/fb308036eae33ac12b3913702eb5e9487239f1af/src/assets/scripts/charts/section01-stacked.js#L29">this example </a> there is one field (mapsTo) for each axis (left and bottom) that gets the field with the same spelling you wrote on data. The another field (scaleType) is how your field scales. Available <code>scaleTypes</code>: time, linear, log, labels.</li>
              </ul> 
            </li>
            <li>Height: specify a height for the chart. (Optional) </li>
          </ul>
        </li>
        <li>See <a href="https://pages.github.ibm.com/IBMOriginals/smartpaper-the-grid/#nunc-convallis"> the sample </a> and hover on each bar to see more infos related to x and y values</li>
      </ul>
</details>
<details>
	<summary><strong>Documentation</strong></summary>
	<p>For the official documentation on Carbon Charts, please visit <a href="https://carbon-design-system.github.io/carbon-charts/?path=/story/intro--welcome">Carbon Charts: A reusable framework-agnostic D3 charting library</a>.</p>
</details>

<details>
	<summary><strong>Color Palette</strong></summary>
	<h4>It is <strong>not required</strong>, but it is possible to change the colors on the charts, two useful links to take a look in order to get the appropriate change.</h4>
	<p>How to implement ? Check <a href="https://carbon-design-system.github.io/carbon-charts/?path=/story/docs-tutorials--color-palette">here</a>!</p>
	<p>What are the available colors ? Check <a href="https://www.carbondesignsystem.com/data-visualization/color-palettes/">here</a>!</p>
</details>



## Questions? Bugs? Don't panic, slack:
`#repeatables-web`
