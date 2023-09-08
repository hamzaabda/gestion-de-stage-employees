const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGODB } = require('./config');
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/note.routes');
const specRoutes = require('./routes/specialite.routes')
const courseRoutes = require('./routes/course.routes')
const CSIRoutes = require('./routes/masterCSI.routes')
const CPSRoutes = require('./routes/masterCPS.routes')
const TRTRoutes = require('./routes/masterTRT.routes')
const stageRoutes = require('./routes/stage.routes')
const etudiantRoutes = require('./routes/etudiant.routes')
const jobRoutes = require('./routes/job.routes')
const applicationRoutes=require('./routes/applicationRoutes')



var cors = require('cors')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(cors())



const swaggerUi = require('swagger-ui-express') // To bind express with express and show ui provided by swagger js-doc
const swaggerDocument = require('./routes/swagger.json');

app.use('/api/users', userRoutes);
app.use('/api/users', eventRoutes);
app.use('/api/users', specRoutes);
app.use('/api/users', courseRoutes);
app.use('/api/users', CSIRoutes);
app.use('/api/users', CPSRoutes);
app.use('/api/users', TRTRoutes);
app.use('/api/users', stageRoutes);
app.use('/api/users', etudiantRoutes);
app.use('/api/users',jobRoutes);
app.use('/api/users',applicationRoutes);


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));











// app.listen(3300)
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('connected to mongodb')
        return app.listen(3300);
    })
    .then(() => console.log('server running on 3300'))
    .catch(err => console.log(err.message));
