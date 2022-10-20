<h1>Simple Command Line Calculator</h1>
<ul>
    <li>Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.</li>
    <li>Create a GitHub repository for the project and submit its URL in the project submission form.</li>
</ul>

<h2>Step 1 — Setting Up the Project</h2>
<p>First, open your terminal window and create a new project directory:</p>
<pre>
    <code>mkdir <mark>project_calculator</mark></code>
</pre>
<p>Then, navigate to this directory:</p>
<pre>
    <code>cd <mark>project_calculator</mark></code>
</pre>
<p>To start adding prompts to your Node.js scripts, you will need to install the inquirer package:</p>
<pre>
    <code>npm install <mark>ts-node typescript @types/inquirer</mark> --save-dev</code>
</pre>

<p>inside actual dependenncies we need to install package:</p>
<pre>
    <code>npm install <mark>inquirer</mark></code>
</pre>

<p>open your terminal window and create a new directory:</p>
<pre>
    <code>mkdir <mark>src</mark></code>
</pre>

<p>go inside this directory with following command and crreate index.ts file inside it:</p>
<pre>
    <code>cd <mark>src</mark></code>
</pre>

<p>add following lines into package.json file:</p>
<pre>
 <code>
"scripts": {
    "start": "ts-node --esm ./src/index.ts",
    "build": "tsc.cmd ./src/index.ts"
  },
 </code>
</pre>

<p>add following lines into package.json file:</p>
<pre>
 <code>
"type": "module"
 </code>
</pre>

<p>run following at project root directory:</p>
<pre>
 <code>tsc --init</code>
</pre>

<p>change following inside tsconfig.json file:</p>
<pre>
 <code>
{
  "compilerOptions": {
    "target": "es6",
    "module": "ES6",
   ...
}
 </code>
</pre>

<p>run following code at project root directory to execute node file or project file:</p>
<pre>
 <code>npm start or yarn start</code>
</pre>

<p>you are now 'good to go', make logic of your first calculator inside index.ts file in your desired IDE:</p>

<p>if you have cloned this project just run following command:</p>
<pre>
 <code>npm intall or yarn add</code>
</pre>

<p to execute prewritten code inside index.tx run following command:</p>
<pre>
 <code>npm start or yarn start</code>
</pre>
<p>after running above mentioned command list of four option will displayed on your cli:</p>
![image](https://user-images.githubusercontent.com/46741864/196930162-723d433e-1f8b-468b-847e-304edb399f08.png)

<p select option like i have select in case of addition it will prompt for values after two promts a new prompt will be displayed ask whether you want to continue with more values or not:</p>
<p>in case you have completed your calculation cli will console answer, displayed in below snip:</p>

![image](https://user-images.githubusercontent.com/46741864/196930974-ed048e82-d948-47dc-bfb2-44dfdc40916d.png)

