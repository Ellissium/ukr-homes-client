export const convertFilesToFileList = (files: any) => {
	let fileList = new DataTransfer()

	for (const file of files) {
		const blob = new Blob([file], { type: file.type })
		const convertedFile = new File([blob], file.name, {
			lastModified: file.lastModified
		})
		fileList.items.add(convertedFile)
	}

	return fileList.files
}
