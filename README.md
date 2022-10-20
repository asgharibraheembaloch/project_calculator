<h1>Simple Command Line Calculator</h1>
<ul>
    <li>Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.</li>
    <li>Create a GitHub repository for the project and submit its URL in the project submission form.</li>
</ul>

<h2>Step 1 — Setting Up the Project</h2>
<p>First, open your terminal window and create a new project directory:</p>
<pre>
    <code>mkdir <mark>project00_calculator</mark></code>
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
