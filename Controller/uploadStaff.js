


exports.uploadStaff = async(req, res, next)=> {
    const fileBuffer = req.file.buffer;
    try {
        // parse the excel file using xlsx
        const workbook = xlsx.read(fileBuffer, { type: 'buffer'});

        // process the data and insert into mongodb
        const sheetName = workbook.SheetName[0];
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        // insert data into mongodb using mongoose

        await staff.insertMany(data);

        res.status(200).send('file uploaded and data inserted into mongoDB');
    }catch (error) {
       console.error('error handling file upload', error);
       res.status(500).send('internal server error')
    }
  next()
}