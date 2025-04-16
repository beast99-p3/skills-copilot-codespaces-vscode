// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { spawn } = require('child_process');
const { Readable } = require('stream');
const { createHash } = require('crypto');
const { pipeline } = require('stream');
const { Transform } = require('stream');
const { Writable } = require('stream');
const { PassThrough } = require('stream');
const { finished } = require('stream');
const { pipeline } = require('stream');
const { Readable } = require('stream');
const { Writable } = require('stream');
const { Transform } = require('stream');
