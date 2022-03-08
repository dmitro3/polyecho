import mongoose, { Document } from 'mongoose'

export interface ISample {
	cid: string
	audioUrl: string
	filename: string
	filetype: string
	filesize: number
	createdBy: string
}

export interface ISampleDoc extends Document, ISample {}

export const sampleSchema = new mongoose.Schema(
	{
		cid: {
			type: String,
			required: true,
		},
		audioUrl: {
			type: String,
			required: true,
		},
		filename: {
			type: String,
			required: true,
			trim: true,
			maxlength: 200,
		},
		filetype: {
			type: String,
			required: true,
			trim: true,
			maxlength: 10,
		},
		filesize: {
			type: Number,
			required: true,
		},
		// TODO: Add sample tags
		createdBy: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
)

export const Sample = mongoose.models.sample || mongoose.model<ISampleDoc>('sample', sampleSchema)
